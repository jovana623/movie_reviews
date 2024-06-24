import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/apiMovies";

export function useMovies() {
  const { data: movies, isLoading } = useQuery({
    queryFn: getMovies,
    queryKey: ["movies"],
  });

  return { movies, isLoading };
}
