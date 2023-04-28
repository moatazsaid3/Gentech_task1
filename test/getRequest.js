const axios = require("axios");

async function getRequest(page, limit) {
  const res = await axios.get("http://localhost:3000/api/product/getProducts", {
    params: { page: page, limit: limit },
  });

  return res;
}
module.exports = getRequest;
