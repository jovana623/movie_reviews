import { QueryClient, useMutation } from "@tanstack/react-query";
import { deleteMovie as deleteMovieAPI } from "../../services/apiMovies";
import toast from "react-hot-toast";

export function useDeleteMovie() {
  const queryClient = new QueryClient();
  const { mutate: deleteMovie, isLoading } = useMutation({
    mutationFn: deleteMovieAPI,
    onSettled: () => {
      toast.success("Movie deleted");
      queryClient.invalidateQueries();
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { deleteMovie, isLoading };
}
