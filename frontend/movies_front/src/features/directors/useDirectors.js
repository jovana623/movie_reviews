import { useQuery } from "@tanstack/react-query";
import { getDirectors } from "../../services/apiDirectors";

export function useDirectors() {
  const { data: directors, isLoading } = useQuery({
    queryFn: getDirectors,
    queryKey: ["directors"],
  });

  return { directors, isLoading };
}
