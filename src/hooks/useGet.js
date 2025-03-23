import { useQuery } from "@tanstack/react-query";

// Default GET function using fetch
const defaultGetFn = async ({ url, params = {} }) => {
  // Append query params to the URL if provided
  const urlWithParams =
    params && Object.keys(params).length
      ? `${url}?${new URLSearchParams(params).toString()}`
      : url;

  const response = await fetch(urlWithParams, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to fetch data: ${response.status} - ${errorText}`);
  }

  // Check Content-Type to handle JSON or text responses
  const contentType = response.headers.get("Content-Type") || "";
  if (contentType.includes("application/json")) {
    return response.json(); // Parse as JSON if applicable
  }
  return response.text(); // Otherwise, return plain text
};

export function useGet({
  url,
  queryKey,
  params = {}, // Optional: Query parameters (e.g., { page: 1, limit: 10 })
  getFn = defaultGetFn, // Optional: Custom GET function
  enabled = true, // Optional: Whether to run the query automatically
  onSuccessCallback = () => {}, // Optional: Custom success callback
  onErrorCallback = () => {}, // Optional: Custom error callback
} = {}) {
  const query = useQuery({
    queryKey: queryKey, // e.g., ['users', params]
    queryFn: () => getFn({ url, params }), // Pass url and params to the GET function
    enabled: enabled, // Only fetch if enabled is true
    onSuccess: (data) => {
      onSuccessCallback(data);
    },
    onError: (error) => {
      onErrorCallback(error);
    },
  });

  return {
    ...query,
  };
}
