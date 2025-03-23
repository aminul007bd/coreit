import { useMutation, useQueryClient } from "@tanstack/react-query";

// Default PUT function using fetch
const defaultPutFn = async ({ url, data }) => {
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to update data: ${response.status} - ${errorText}`);
  }

  // Check Content-Type to handle JSON or text responses
  const contentType = response.headers.get("Content-Type") || "";
  if (contentType.includes("application/json")) {
    return response.json(); // Parse as JSON if applicable
  }
  return response.text(); // Otherwise, return plain text
};

export function usePutData({
  url,
  queryKeyToInvalidate = null, // Optional: Query key to invalidate after success
  putFn = defaultPutFn, // Optional: Custom PUT function
  onSuccessCallback = () => {}, // Optional: Custom success callback
  onErrorCallback = () => {}, // Optional: Custom error callback
} = {}) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => putFn({ url, data }), // Pass url and data to the PUT function
    onSuccess: (responseData) => {
      if (queryKeyToInvalidate) {
        queryClient.invalidateQueries(queryKeyToInvalidate);
      }
      onSuccessCallback(responseData);
    },
    onError: (error) => {
      onErrorCallback(error);
    },
  });

  return {
    put: (data) => mutation.mutate(data), // Simplified way to trigger the PUT request
    ...mutation, // Spread all mutation properties (isPending, isError, etc.)
  };
}
