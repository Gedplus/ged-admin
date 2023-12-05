import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/base_url";

const getProducts = async () => {
  const response = await axios.get(`${base_url}product/`);

  return response.data;
};
const createProduct = async (product) => {
  const response = await axios.post(`http://localhost:5000/api/product/`, product, config);

  return response.data;
};

const productService = {
  getProducts,
  createProduct,
};

export default productService;