import { useMutation } from "@tanstack/react-query";

const postFileFn = async ({ url, formData }) => {
  console.log("formData", formData);
  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to upload file: ${response.statusText}`);
  }
  return response.json();
};

export function usePostFileUpload({
  url,
  onSuccess = () => {},
  onError = () => {},
} = {}) {
  const mutation = useMutation({
    mutationFn: (formData) => postFileFn({ url, formData }),
    onSuccess: (responseData) => {
      onSuccess(responseData);
    },
    onError: (error) => {
      onError(error);
    },
  });

  return {
    postFile: (formData) => mutation.mutate(formData), // Trigger upload with FormData
    isPending: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
    data: mutation.data,
  };
}
