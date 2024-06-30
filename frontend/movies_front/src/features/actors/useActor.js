import { useQuery } from "@tanstack/react-query";
import { getActor } from "../../services/apiActors";

export function useActor(actorId) {
  const { data: actor, isLoading } = useQuery({
    queryFn: () => getActor(actorId),
    queryKey: ["actor", actorId],
  });
  return { actor, isLoading };
}
