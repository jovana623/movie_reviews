import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/apiMovies";

export function useMovies(genreId, year) {
  const { data: movies, isLoading } = useQuery({
    queryFn: () => getMovies(genreId, year),
    queryKey: ["movies", genreId, year],
  });

  return { movies, isLoading };
}
