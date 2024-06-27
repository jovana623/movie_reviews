import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/apiMovies";

export function useMovies(genreId) {
  const { data: movies, isLoading } = useQuery({
    queryFn: () => getMovies(genreId),
    queryKey: ["movies", genreId],
  });

  return { movies, isLoading };
}
