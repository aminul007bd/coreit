import {
  Box,
  Button,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission (e.g., send data to the server)
    reset();
  };

  return (
    <Box maxW="md" mx="auto" mt={10}>
      <Text as="h1" fontSize="2xl" mb={4}>
        Contact
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <Stack spacing={1} w="full">
            <Text as="label" htmlFor="name" fontWeight="bold">
              Name
            </Text>
            <Input
              id="name"
              name="name"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <Text color="red.500" fontSize="sm">
                {errors.name.message}
              </Text>
            )}
          </Stack>

          <Stack spacing={1} w="full">
            <Text as="label" htmlFor="email" fontWeight="bold">
              Email
            </Text>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <Text color="red.500" fontSize="sm">
                {errors.email.message}
              </Text>
            )}
          </Stack>

          <Stack spacing={1} w="full">
            <Text as="label" htmlFor="message" fontWeight="bold">
              Message
            </Text>
            <Textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <Text color="red.500" fontSize="sm">
                {errors.message.message}
              </Text>
            )}
          </Stack>

          <Button type="submit" colorScheme="blue" w="full">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
}
