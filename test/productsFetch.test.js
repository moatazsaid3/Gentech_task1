const products = require("./getRequest");
const expectedResult = {
  next: {
    page: 2,
    limit: 5,
  },
  results: [
    {
      _id: "644a2f37d1b531cf4a777b6d",
      name: "product 0",
      seller: "amazon",
      description: "a product",
      price: 123,
      createdAt: "2023-04-27T08:15:51.799Z",
      updatedAt: "2023-04-27T08:15:51.799Z",
      __v: 0,
    },
    {
      _id: "644a2f37d1b531cf4a777b6f",
      name: "product 1",
      seller: "amazon",
      description: "a product",
      price: 123,
      createdAt: "2023-04-27T08:15:51.947Z",
      updatedAt: "2023-04-27T08:15:51.947Z",
      __v: 0,
    },
    {
      _id: "644a2f38d1b531cf4a777b71",
      name: "product 2",
      seller: "amazon",
      description: "a product",
      price: 123,
      createdAt: "2023-04-27T08:15:52.093Z",
      updatedAt: "2023-04-27T08:15:52.093Z",
      __v: 0,
    },
    {
      _id: "644a2f38d1b531cf4a777b73",
      name: "product 3",
      seller: "amazon",
      description: "a product",
      price: 123,
      createdAt: "2023-04-27T08:15:52.239Z",
      updatedAt: "2023-04-27T08:15:52.239Z",
      __v: 0,
    },
    {
      _id: "644a2f38d1b531cf4a777b75",
      name: "product 4",
      seller: "amazon",
      description: "a product",
      price: 123,
      createdAt: "2023-04-27T08:15:52.384Z",
      updatedAt: "2023-04-27T08:15:52.384Z",
      __v: 0,
    },
  ],
};

test("Get page 1 of products with a limit of 5", () => {
  expect(products()).toBe(expectedResult);
});
