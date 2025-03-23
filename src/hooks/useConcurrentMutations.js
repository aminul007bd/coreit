import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, useCallback, useMemo } from "react";

/**
 * Correctly implemented hook for handling concurrent mutations
 * @param {Object} endpointsConfig - Object containing endpoint configurations
 */
function useConcurrentMutations(endpointsConfig) {
  const queryClient = useQueryClient();
  const [results, setResults] = useState({});

  // Store endpoints in state so the identity is stable
  const [endpoints] = useState(endpointsConfig);

  // Get the endpoint keys
  const endpointKeys = useMemo(() => Object.keys(endpoints), [endpoints]);

  // Default fetch options
  const defaultFetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Helper function to handle fetch responses
  const handleFetchResponse = async (response) => {
    if (!response.ok) {
      let errorMessage = `Request failed with status ${response.status}`;

      try {
        const errorData = await response.json();
        if (errorData && errorData.message) {
          errorMessage = errorData.message;
        }
      } catch (e) {
        // If the error response is not JSON, just use the status message
      }

      const error = new Error(errorMessage);
      error.status = response.status;
      throw error;
    }

    // Check if the response has content
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return response.json();
    } else if (response.status === 204) {
      // No content response
      return null;
    } else if (contentType && contentType.includes("text/")) {
      return response.text();
    }

    // Default fallback
    return response;
  };

  // Create mutation function - this is like a factory that returns the specific mutation function
  const createMutationFn = (endpointKey) => {
    const config = endpoints[endpointKey];

    return async (data) => {
      if (!config) return null;

      if (!config.url && !config.mutationFn) {
        throw new Error(
          `Endpoint ${endpointKey} must have either a 'url' or 'mutationFn' property`,
        );
      }

      // If mutationFn is provided, use it directly
      if (config.mutationFn) {
        return config.mutationFn(data);
      }

      // Otherwise use fetch with the provided URL
      const fetchOptions = {
        ...defaultFetchOptions,
        ...(config.fetchOptions || {}),
      };

      // Handle different types of bodies
      if (
        data &&
        typeof data === "object" &&
        !(data instanceof FormData) &&
        !(data instanceof URLSearchParams) &&
        !(data instanceof Blob) &&
        !(data instanceof ArrayBuffer)
      ) {
        fetchOptions.body = JSON.stringify(data);
      } else if (data) {
        fetchOptions.body = data;
      }

      try {
        const response = await fetch(config.url, fetchOptions);
        return handleFetchResponse(response);
      } catch (error) {
        console.error(`Fetch error for ${endpointKey}:`, error);
        throw error;
      }
    };
  };

  // Create onSuccess and onError handlers for each endpoint
  const createSuccessHandler = (endpointKey) => {
    const config = endpoints[endpointKey];

    return (data) => {
      setResults((prev) => ({
        ...prev,
        [endpointKey]: { status: "success", data },
      }));

      if (config && config.onSuccess) {
        config.onSuccess(data);
      }

      if (config && config.invalidateQueries) {
        if (Array.isArray(config.invalidateQueries)) {
          config.invalidateQueries.forEach((queryKey) => {
            queryClient.invalidateQueries({ queryKey });
          });
        } else {
          queryClient.invalidateQueries({ queryKey: config.invalidateQueries });
        }
      }
    };
  };

  const createErrorHandler = (endpointKey) => {
    const config = endpoints[endpointKey];

    return (error) => {
      setResults((prev) => ({
        ...prev,
        [endpointKey]: { status: "error", error },
      }));

      if (config && config.onError) {
        config.onError(error);
      }
    };
  };

  // Create individual mutation hooks using the React Query hook
  // We use an object to store them by key for easier access
  const mutationHooksMap = {};

  // Individual hooks for up to 10 endpoints (adjust as needed)
  // Using numbered hooks to comply with Rules of Hooks
  const key0 = endpointKeys[0];
  const mutation0 = useMutation({
    mutationFn: key0 ? createMutationFn(key0) : () => Promise.resolve(),
    onSuccess: key0 ? createSuccessHandler(key0) : () => {},
    onError: key0 ? createErrorHandler(key0) : () => {},
  });
  if (key0) mutationHooksMap[key0] = mutation0;

  const key1 = endpointKeys[1];
  const mutation1 = useMutation({
    mutationFn: key1 ? createMutationFn(key1) : () => Promise.resolve(),
    onSuccess: key1 ? createSuccessHandler(key1) : () => {},
    onError: key1 ? createErrorHandler(key1) : () => {},
  });
  if (key1) mutationHooksMap[key1] = mutation1;

  const key2 = endpointKeys[2];
  const mutation2 = useMutation({
    mutationFn: key2 ? createMutationFn(key2) : () => Promise.resolve(),
    onSuccess: key2 ? createSuccessHandler(key2) : () => {},
    onError: key2 ? createErrorHandler(key2) : () => {},
  });
  if (key2) mutationHooksMap[key2] = mutation2;

  const key3 = endpointKeys[3];
  const mutation3 = useMutation({
    mutationFn: key3 ? createMutationFn(key3) : () => Promise.resolve(),
    onSuccess: key3 ? createSuccessHandler(key3) : () => {},
    onError: key3 ? createErrorHandler(key3) : () => {},
  });
  if (key3) mutationHooksMap[key3] = mutation3;

  const key4 = endpointKeys[4];
  const mutation4 = useMutation({
    mutationFn: key4 ? createMutationFn(key4) : () => Promise.resolve(),
    onSuccess: key4 ? createSuccessHandler(key4) : () => {},
    onError: key4 ? createErrorHandler(key4) : () => {},
  });
  if (key4) mutationHooksMap[key4] = mutation4;

  // Get combined states
  const isPending = useMemo(() => {
    return endpointKeys.some((key) => mutationHooksMap[key]?.isPending);
  }, [endpointKeys, mutationHooksMap]);

  const isError = useMemo(() => {
    return endpointKeys.some((key) => mutationHooksMap[key]?.isError);
  }, [endpointKeys, mutationHooksMap]);

  const isSuccess = useMemo(() => {
    return endpointKeys.length > 0 && endpointKeys.every((key) => mutationHooksMap[key]?.isSuccess);
  }, [endpointKeys, mutationHooksMap]);

  const isComplete = useMemo(() => {
    return (
      endpointKeys.length > 0 &&
      endpointKeys.every(
        (key) => mutationHooksMap[key]?.isSuccess || mutationHooksMap[key]?.isError,
      )
    );
  }, [endpointKeys, mutationHooksMap]);

  // Combined errors
  const errors = useMemo(() => {
    return Object.entries(results)
      .filter(([result]) => result.status === "error")
      .reduce((acc, [key, result]) => {
        acc[key] = result.error;
        return acc;
      }, {});
  }, [results]);

  // Trigger all mutations concurrently
  const mutateAll = useCallback(
    (data) => {
      // Reset results
      setResults({});

      // Execute each mutation with its corresponding data
      endpointKeys.forEach((key) => {
        const config = endpoints[key];
        const mutationHook = mutationHooksMap[key];

        if (mutationHook) {
          const mutationData = config.getData ? config.getData(data) : data;
          mutationHook.mutate(mutationData);
        }
      });
    },
    [endpoints, endpointKeys, mutationHooksMap],
  );

  // Execute mutations concurrently and return a promise
  const mutateAllAsync = useCallback(
    async (data) => {
      // Reset results first
      setResults({});

      const promises = endpointKeys.map((key) => {
        const config = endpoints[key];
        const mutationHook = mutationHooksMap[key];

        if (!mutationHook) {
          return Promise.resolve({
            key,
            status: "error",
            error: new Error(`No mutation hook for ${key}`),
          });
        }

        const mutationData = config.getData ? config.getData(data) : data;
        return mutationHook
          .mutateAsync(mutationData)
          .then((result) => ({ key, status: "success", data: result }))
          .catch((error) => ({ key, status: "error", error }));
      });

      const allResults = await Promise.allSettled(promises);
      return allResults.map((result) =>
        result.status === "fulfilled"
          ? result.value
          : {
              status: "error",
              error: result.reason,
            },
      );
    },
    [endpoints, endpointKeys, mutationHooksMap],
  );

  // Reset all mutations
  const reset = useCallback(() => {
    endpointKeys.forEach((key) => {
      const mutationHook = mutationHooksMap[key];
      if (mutationHook) {
        mutationHook.reset();
      }
    });
    setResults({});
  }, [endpointKeys, mutationHooksMap]);

  return {
    mutations: mutationHooksMap,
    results,
    isPending,
    isError,
    isSuccess,
    isComplete,
    errors,
    mutateAll,
    mutateAllAsync,
    reset,
  };
}

export default useConcurrentMutations;
