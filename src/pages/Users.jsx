import { Alert, Button, Spinner, Stack, Text, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";

import DataTable from "../components/common/DataTable";
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

  const {
    data: users,
    isUserError,
    isUserLoading,
  } = useGet({
    url: `${baseUrl}/users`,
    queryKey: ["users"],
  });

  const userColumns = [
    {
      label: "ID",
      key: "id", // Matches the "id" field in the data
    },
    {
      label: "First Name",
      key: "firstName", // Matches the "firstName" field in the data
    },
    {
      label: "Last Name",
      key: "lastName", // Matches the "lastName" field in the data
    },
    {
      label: "Email",
      key: "email", // Matches the "email" field in the data
    },
    {
      label: "Role Name",
      key: "roleId", // Matches the "roleId" field in the data
      Cell: ({ value }) => {
        const role = userRoles?.find((role) => role.id === value);
        return role ? role.roleName : "Unknown Role";
      },
    },
    {
      label: "Created At",
      key: "createdAt", // Matches the "createdAt" field in the data
      align: "center", // Optional alignment
      Cell: ({ value }) => new Date(value).toLocaleString(),
    },
  ];

  console.log("Users data:", users);

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
      {users?.length === 0 ? (
        <Text>No users found.</Text>
      ) : (
        <DataTable
          title="Users"
          columns={userColumns}
          items={users || []}
          pageSize={10} // Optional: Set page size for pagination
        />
      )}
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
