import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createDirector as createDirectorAPI } from "../../services/apiDirectors";
import toast from "react-hot-toast";

export default function useCreateDirector() {
  const queryClient = useQueryClient();
  const { mutate: createDirector, isLoading } = useMutation({
    mutationFn: createDirectorAPI,
    onSuccess: () => {
      toast.success("Director created");
      queryClient.invalidateQueries({ queryKey: ["directors"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { createDirector, isLoading };
}
