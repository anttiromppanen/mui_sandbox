import { useQuery } from '@tanstack/react-query';
import { getAllBlogs, getSingleBlog } from '../services/blogs';

export const useGetBlogs = () => useQuery({ queryKey: ['blogs'], queryFn: getAllBlogs });
export const useGetSingleBlog = (id) => useQuery({ queryKey: ['blog', id], queryFn: () => getSingleBlog(id) });
