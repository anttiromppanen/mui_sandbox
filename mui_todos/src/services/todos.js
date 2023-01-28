import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/todos';

export const getAllTodos = async () => {
  try {
    const response = await axios.get(baseUrl);
    return response.data;
  } catch (error) {
    return console.log(`error with getAllTodos: ${error.message}`);
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`);
    return response;
  } catch (error) {
    return console.log(`error with deleteTodo: ${error.message}`);
  }
};
