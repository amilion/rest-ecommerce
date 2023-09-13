import axiosInstance from "../../api/axiosInstance";

const fetchImage = (endpoint: string) => {
  // const controller = new AbortController();
  // const res = axiosInstance.get(endpoint, { signal: controller.signal });
  // return { res, cancel: () => controller.abort() };
  console.log(axiosInstance.getUri());
  return { imageURL: axiosInstance.getUri() + endpoint };
};

export default fetchImage;
