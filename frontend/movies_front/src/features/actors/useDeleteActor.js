import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteActor as deleteActorAPI } from "../../services/apiActors";
import toast from "react-hot-toast";

export function useDeleteActor() {
  const queryClient = useQueryClient();
  const { mutate: deleteActor, isLoading } = useMutation({
    mutationFn: deleteActorAPI,
    onSuccess: () => {
      toast.success("Actor deleted");
      queryClient.invalidateQueries({ queryKey: ["actors"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteActor, isLoading };
}
