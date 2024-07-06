import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createActor as createActorAPI } from "../../services/apiActors";
import toast from "react-hot-toast";

export function useCreateActor() {
  const queryClient = useQueryClient();
  const { mutate: createActor, isLoading } = useMutation({
    mutationFn: createActorAPI,
    onSuccess: () => {
      toast.success("Actor created");
      queryClient.invalidateQueries({ queryKey: ["actors"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { createActor, isLoading };
}
