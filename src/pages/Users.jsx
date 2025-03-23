import { Alert, Button, Spinner, Stack, Text, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";

import SelectField from "../components/common/SelectField";
import baseUrl from "../config";
import config from "../config";
import { useForm } from "react-hook-form";
import { useGet } from "../hooks/useGet";
import { usePostFileUpload } from "../hooks/usePostFileUpload";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// const UserRoles = [{ value: "1", label: "Admin" }];

// Zod schema for validation
const formSchema = z.object({
  screeningTool: z.string({ message: "User role is required" }).array(),
});

const Users = () => {
  const [selectedUserRole, setSelectedUserRole] = useState("");

  const {
    data: userRoles,
    errorUserRole,
    isLoading,
  } = useGet({
    url: `${baseUrl}/userRole`,
    queryKey: ["userRoles"],
  });

  // Transform userRoles into { value, label } format
  const transformedUserRoles =
    userRoles?.map((role) => ({
      value: role.id.toString(),
      label: role.roleName,
    })) || [];

  console.log("data", transformedUserRoles);

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const { postUser, isPending, isError, error, isSuccess } = usePostFileUpload({
    url: `${config.apiBaseUrl}/StudentSumissionStatus`,
    onSuccessCallback: (responseData) => {
      console.log("File uploaded successfully:", responseData);
    },
    onErrorCallback: (error) => {
      console.error("Error uploading file:", error);
    },
  });

  const handleClearFile = () => {};

  const onSubmit = handleSubmit((data) => {
    setSelectedUserRole(data?.userRole[0]);
  });

  if (isLoading) return <Spinner size="xl" />;
  if (errorUserRole)
    return <Alert status="error">Error loading userRoles </Alert>;

  return (
    <>
      <Stack align={"start"}>
        <form onSubmit={onSubmit}>
          <VStack gap="4" align="flex-start" marginTop={4}>
            <SelectField
              control={control}
              name="userRole"
              items={transformedUserRoles}
              label="Select user role"
              placeholder="Select a user role"
              lazyMount={true}
              error={errors.UserRoles?.message}
            />
          </VStack>
          <Button
            type="submit"
            bg="blue.800"
            color={"white"}
            marginTop="2"
            disabled={isPending}
          >
            Add User
          </Button>
          <Button
            type="reset"
            onClick={handleClearFile}
            bg="blue.800"
            color={"white"}
            marginLeft="2"
            marginTop="2"
            disabled={isPending}
          >
            Cancel
          </Button>
        </form>
        {isError && <Text color="red.500">{error.message}</Text>}
      </Stack>
    </>
  );
};

export default Users;
