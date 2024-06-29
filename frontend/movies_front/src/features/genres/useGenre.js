import { useQuery } from "@tanstack/react-query";
import { getGenre } from "../../services/apiGenres";

export function useGenre(genreId) {
  const { data: genre, isLoading } = useQuery({
    queryFn: () => getGenre(genreId),
    queryKey: ["genre", genreId],
  });

  return { genre, isLoading };
}
