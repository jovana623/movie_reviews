import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUser as loginUserAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLoginUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: loginUser, isLoading } = useMutation({
    mutationFn: loginUserAPI,

    onSuccess: (data) => {
      toast("Welcome", { icon: "👋" });
      localStorage.setItem("token", data.access);
      queryClient.invalidateQueries({ queryKey: ["users"] });
      navigate("/");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { loginUser, isLoading };
}
