import axios from "axios";

export const uploadImage = async (file, token) => {
  const formData = new FormData();

  formData.append("image", file);

  const response = await axios.post(
    "/api/upload/image",

    formData,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
};
