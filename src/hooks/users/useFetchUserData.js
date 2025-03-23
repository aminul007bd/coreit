import config from "../../config";
import { useGet } from "../useGet";

export const useFetchUserData = ({ userId, userRole }) => {
  const queryKey = ["userData", userId, userRole];

  const {
    data,
    isLoading,
    error,
    isFetching,
    refetch,
  } = useGet({
    url: `${config.apiBaseUrl}/${userId}/${userRole}`,
    queryKey,
    params: {
      userId,
      userRole,
    },
    enabled: !!userRole && !!userId,
    onSuccessCallback: (data) => {
      console.log("Data fetched successfully:", data);
    },
    onErrorCallback: (err) => {
      console.error("Error fetching READ Act data:", err);
    },
    // staleTime: 0, // Data is immediately stale (forces refetch on next render)
  });

  return {
    data,
    isLoading: isLoading || isFetching,
    error,
    refetch,
  };
};
