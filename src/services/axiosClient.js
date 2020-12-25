import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://burger-builder-e6653-default-rtdb.firebaseio.com",
});

export default axiosClient;
