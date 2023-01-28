import { useQuery } from '@tanstack/react-query';
import { getAllTodos } from '../services/todos';

const useFetchTodo = () => useQuery(['todos'], getAllTodos);

export default useFetchTodo;
