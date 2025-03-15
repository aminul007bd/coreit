"use client";

import { Button, Stack, createListCollection } from "@chakra-ui/react";

import FormSelect from "../components/common/FormSelect";
import baseUrl from "../config";
import { useForm } from "react-hook-form";
import useGet from "../hooks/useGet";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Schema definition
const formSchema = z.object({
  userRole: z.string({ message: "Role is required" }),
});

const UserRole = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userRole: "",
    },
  });

  // Fetch user roles from API and transform to collection
  const { data: roles, isLoading } = useGet({
    endpoint: `${baseUrl}/userRole`,
    queryKey: ["userRoles"],
    transformData: (data) =>
      createListCollection({
        items: data.map((role) => ({
          label: role.roleName,
          value: role.id.toString(),
        })),
      }),
  });

  const onSubmit = handleSubmit((data) => console.log("submitted data", data));

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="4" align="flex-start">
        <FormSelect
          control={control}
          name="userRole"
          label="User Role"
          options={roles || createListCollection({ items: [] })} // Fallback to empty collection
          placeholder={isLoading ? "Loading roles..." : "Select a role"}
          error={errors.userRole}
        />
        <Button size="sm" type="submit" isDisabled={isLoading}>
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default UserRole;
