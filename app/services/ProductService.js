import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://172.16.1.197:1337",
});
const getProductList = () => apiClient.get("/products");

export default {
  getProductList,
};
