import { useQuery } from "@tanstack/react-query";
import { getActors } from "../../services/apiActors";

export function useActors() {
  const { data: actors, isLoading } = useQuery({
    queryFn: getActors,
    queryKey: ["actors"],
  });
  return { actors, isLoading };
}
