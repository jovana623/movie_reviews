import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { createUser as createUserAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useCreateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createUser, isLoading } = useMutation({
    mutationFn: createUserAPI,

    onSuccess: () => {
      toast.success("User created");
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
      console.log(err.message);
    },
  });

  return { createUser, isLoading };
}
