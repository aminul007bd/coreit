import { Button, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import { Toaster, toaster } from "@/components/ui/toaster";

import FormSelect from "./FormSelect";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  role: z
    .string({ required_error: "Please select a user role" })
    .min(1, "User role is required"),
  department: z
    .string({ required_error: "Please select a department" })
    .min(1, "Department is required"),
  status: z
    .string({ required_error: "Please select a user status" })
    .min(1, "Status is required"),
});

const FormExample = () => {
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "",
      department: "",
      status: "active",
    },
  });

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form data:", data);

      toaster({
        title: "Success",
        description: "User settings updated successfully",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch {
      toaster({
        title: "Error",
        description: "Failed to update user settings",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const roles = [
    { label: "Admin", value: "admin" },
    { label: "Manager", value: "manager" },
    { label: "User", value: "user" },
    { label: "Guest", value: "guest" },
  ];

  const departments = [
    { label: "IT", value: "it" },
    { label: "HR", value: "hr" },
    { label: "Finance", value: "finance" },
    { label: "Operations", value: "operations" },
  ];

  const statuses = [
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
    { label: "Pending", value: "pending" },
  ];

  return (
    <Card mt={6} shadow="sm" maxW="xl">
      <Toaster />
      <CardBody>
        <Heading size="md" mb={4}>
          User Management
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap="4">
            <FormSelect
              name="role"
              label="User Role"
              control={control}
              error={errors.role}
              options={roles}
              placeholder="Select user role"
            />

            <FormSelect
              name="department"
              label="Department"
              control={control}
              error={errors.department}
              options={departments}
              placeholder="Select department"
            />

            <FormSelect
              name="status"
              label="Status"
              control={control}
              error={errors.status}
              options={statuses}
              placeholder="Select status"
            />

            <Button
              size="md"
              type="submit"
              colorScheme="blue"
              width="full"
              mt={2}
              isLoading={isSubmitting}
              loadingText="Updating..."
            >
              Update User Settings
            </Button>
          </Stack>
        </form>
      </CardBody>
    </Card>
  );
};

export default FormExample;
