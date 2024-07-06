import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateActor as updateActorAPI } from "../../services/apiActors";
import toast from "react-hot-toast";

export function useUpdateActor() {
  const queryClient = useQueryClient();

  const { mutate: updateActor, isLoading } = useMutation({
    mutationFn: (data) => updateActorAPI(data.actorId, data.updatedData),
    onSuccess: () => {
      toast.success("Actor updated");
      queryClient.invalidateQueries({ queryKey: ["actors"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateActor, isLoading };
}
