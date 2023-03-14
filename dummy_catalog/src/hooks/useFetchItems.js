import { useQuery } from "@tanstack/react-query";
import { getAllItems, getSingleItem } from "../services/items";

const useFetchItems = () => useQuery(['items'], getAllItems);
const useGetSingleItem = (id) =>
  useQuery({ queryKey: ['item', id], queryFn: () => getSingleItem(id) });

export { useFetchItems, useGetSingleItem };