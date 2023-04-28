const Redis = require("redis");

const DEFALUT_EXPIRATION = 3600;

module.exports = function paginatedResults(model) {
  const redisClient = Redis.createClient();
  return async (req, res, next) => {
    const page = parseInt(req.query.page) ? parseInt(req.query.page) : 1;
    const limit = parseInt(req.query.limit) ? parseInt(req.query.limit) : 10;

    const Key = model.collection.collectionName + page + "-" + limit;

    await redisClient.connect();

    const redisData = await redisClient.get(Key, async (error, data) => {
      if (error) {
        console.error("error : " + error);
      }
      return data;
    });

    if (redisData != null) {
      //console.log("cacheHit");
      res.paginatedResults = JSON.parse(redisData);
      redisClient.quit();
      next();
    } else {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      const results = {};

      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      if (endIndex < (await model.countDocuments().exec())) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }
      try {
        results.results = await model
          .find()
          .limit(limit)
          .skip(startIndex)
          .exec();

        res.paginatedResults = results;

        redisClient.setEx(Key, DEFALUT_EXPIRATION, JSON.stringify(results));
        redisClient.quit();
        next();
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  };
};
