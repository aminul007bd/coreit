import config from "../../config";
import { usePutData } from "../usePutData";
import { useQueryClient } from "@tanstack/react-query";

export const usePutUserData = ({
  onSuccess,
  userId,
}) => {
  const queryClient = useQueryClient();

  const {
    put: putUserData,
    isPending: isPendingDistrict,
    isSuccess: isSuccessDistrict,
    isError: isErrorDistrict,
    error: errorDistrict,
  } = usePutData({
    url: `${config.apiBaseUrl}/api/${userId}`,
    onSuccessCallback: () => {
      onSuccess();
      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey.includes(userId),
      });
    },
    onErrorCallback: (err) => console.error("Error putting data:", err),
  });

  const submitUpdatedData = async (data) => {
    const allGoalsFieldsHaveValue = Object.values(data).every(
      (field) =>
        field !== undefined && field !== null && field !== "" && field !== requiredFieldMessage,
    );

    const dataPayload = {
      ...data,
      districtGoalsCompleted: allGoalsFieldsHaveValue,
    };

    try {
      const districtResult = await putUserData(dataPayload);
      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey.includes(userId),
      });
      return { success: true, districtResult };
    } catch (error) {
      console.error("Error submitting userData data:", error);
      throw error;
    }
  };

  return {
    submitUpdatedData,
    isSubmitting,
    isSuccess,
    hasError,
    errorMessage,
  };
};
