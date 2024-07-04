import { useQueryClient, useMutation } from "@tanstack/react-query";
import { createMovie } from "../../services/apiMovies";
import toast from "react-hot-toast";

export function useCreateMovie() {
  const queryClient = useQueryClient();

  const { mutate: movie, isLoading } = useMutation({
    mutationFn: createMovie,
    onSuccess: () => {
      toast.success("Movie created");
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { movie, isLoading };
}
