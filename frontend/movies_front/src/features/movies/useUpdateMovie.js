import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateMovie as updateMovieAPI } from "../../services/apiMovies";
import toast from "react-hot-toast";

export function useUpdateMovie() {
  const queryClient = useQueryClient();
  const { mutate: updateMovie, isLoading } = useMutation({
    mutationFn: (data) => updateMovieAPI(data.movieId, data.updatedData),
    onSuccess: () => {
      toast.success("Movie updated");
      queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateMovie, isLoading };
}
