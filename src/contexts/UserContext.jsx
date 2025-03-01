/* eslint-disable react/prop-types */
import { createContext, useMemo } from "react";

import  useGet  from "../hooks/useGet";

const UserContext = createContext();

export const UserProvider = ({ userId, children }) => {
  const { 
    data: user, 
    isLoading, 
    error, 
    isError, 
    refetch 
  } = useGet({
    endpoint: `/api/users/${userId}`,
    queryKey: ['user', userId],
    options: {
      enabled: !!userId, // Only fetch if userId exists
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  });

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({
    user,
    isLoading,
    error,
    isError,
    refetchUser: refetch,
  }), [user, isLoading, error, isError, refetch]);

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

