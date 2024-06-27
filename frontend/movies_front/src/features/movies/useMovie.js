import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../../services/apiMovies";

export function useMovie(movieId) {
  const { data: movie, isLoading } = useQuery({
    queryFn: () => getMovieById(movieId),
    queryKey: ["movie", movieId],
  });
  return { movie, isLoading };
}
