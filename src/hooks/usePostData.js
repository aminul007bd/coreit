import { useMutation, useQueryClient } from "@tanstack/react-query";

// Default POST function using fetch
const defaultPostFn = async ({ url, data }) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to post data: ${response.statusText}`);
  }

  return response.json();
};

export function usePostData({
  url,
  queryKeyToInvalidate = null, // Optional: Query key to invalidate after success
  postFn = defaultPostFn, // Optional: Custom POST function
  onSuccessCallback = () => {}, // Optional: Custom success callback
  onErrorCallback = () => {}, // Optional: Custom error callback
} = {}) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => postFn({ url, data }), // Pass url and data to the POST function
    onSuccess: (responseData) => {
      // Invalidate queries if a queryKey is provided
      if (queryKeyToInvalidate) {
        queryClient.invalidateQueries(queryKeyToInvalidate);
      }
      // Call custom success callback
      onSuccessCallback(responseData);
    },
    onError: (error) => {
      // Call custom error callback
      onErrorCallback(error);
    },
  });

  // Return mutation object and a helper function to trigger the POST
  return {
    post: (data) => mutation.mutate(data), // Simplified way to trigger the mutation
    ...mutation, // Spread all mutation properties (isPending, isError, etc.)
  };
}
