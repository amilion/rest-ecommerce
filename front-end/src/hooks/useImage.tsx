import { useEffect, useState } from "react";
import fetchImage from "./service/fetchImage";

const useImage = (endpoint: string) => {
  const [image, setImage] = useState<string | null>(null);
  useEffect(() => {
    const { imageURL } = fetchImage(endpoint);
    setImage(imageURL);
  }, [endpoint]);
  return { image };
};

export default useImage;
