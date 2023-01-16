import axios from "axios";
const baseURL = "https://fakestoreapi.com/";
const interceptor = axios.create({
  baseURL,
});

export default interceptor;
