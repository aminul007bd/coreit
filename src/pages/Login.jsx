import { Box, Button, Input, Stack, Text, VStack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useState } from "react";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic
    login({ username });
  };

  return (
    <Box className="flex items-center justify-center min-h-screen bg-gray-100">
      <Box bg="white" p={8} rounded="md" shadow="md" w="full" maxW="md">
        <Text as="h1" fontSize="2xl" mb={6} textAlign="center">
          Login
        </Text>
        <form onSubmit={handleLogin}>
          <VStack spacing={4}>
            <Stack spacing={1} w="full">
              <Text as="label" htmlFor="username" fontWeight="bold">
                Username
              </Text>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Stack>

            <Stack spacing={1} w="full">
              <Text as="label" htmlFor="password" fontWeight="bold">
                Password
              </Text>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Stack>

            <Button type="submit" colorScheme="blue" w="full">
              Login
            </Button>
          </VStack>
        </form>
        <Text mt={4} textAlign="center">
          Don&apos;t have an account?{" "}
          <Link to="/register" style={{ color: "blue" }}>
            Register
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
