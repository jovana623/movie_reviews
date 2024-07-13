import { useQuery } from "@tanstack/react-query";
import { getDirector } from "../../services/apiDirectors";

export function useDirector(directorId) {
  const { data: direcor, isLoading } = useQuery({
    queryFn: getDirector,
    queryKey: ["director", directorId],
  });
  return { direcor, isLoading };
}
