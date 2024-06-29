import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../../services/apiGenres";

export function useGenres() {
  const { data: genres, isLoading } = useQuery({
    queryFn: getGenres,
    queryKey: ["genres"],
  });

  return { genres, isLoading };
}
