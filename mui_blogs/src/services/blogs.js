import axios from 'axios';

const baseUrl = 'http://localhost:3001/blogs';

export const getAllBlogs = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getSingleBlog = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};
