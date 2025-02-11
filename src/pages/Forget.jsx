import { Box, Button, Input, Stack, Text, VStack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useState } from "react";

const Forget = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Perform forgot password logic
    console.log("Forgot password for:", email);
  };

  return (
    <Box className="flex items-center justify-center min-h-screen bg-gray-100">
      <Box bg="white" p={8} rounded="md" shadow="md" w="full" maxW="md">
        <Text as="h1" fontSize="2xl" mb={6} textAlign="center">
          Forgot Password
        </Text>
        <form onSubmit={handleForgotPassword}>
          <VStack spacing={4}>
            <Stack spacing={1} w="full">
              <Text as="label" htmlFor="email" fontWeight="bold">
                Email
              </Text>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Stack>
            <Button type="submit" colorScheme="blue" w="full">
              Submit
            </Button>
          </VStack>
        </form>
        <Text mt={4} textAlign="center">
          Remember your password?{" "}
          <Link to="/login" style={{ color: "blue" }}>
            Login
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Forget;
