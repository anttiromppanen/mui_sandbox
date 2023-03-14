import axios from 'axios';
const baseUrl = 'http://localhost:3001/items'

const getAllItems = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const getSingleItem = async (id) => {
  const response = await getAllItems()
  const filterSingleItem = response.filter((item) => item.id === Number(id));
  return filterSingleItem[0];
};

export { getAllItems, getSingleItem };