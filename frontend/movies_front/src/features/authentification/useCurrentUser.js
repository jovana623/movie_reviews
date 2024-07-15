import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";

export function useCurrentUser() {
  const token = localStorage.getItem("token");

  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    enabled: !!token,
    onError: (err) => {
      console.log(err.message);
    },
  });
}
