import { Box, Button, Input, Stack, Text, VStack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic
    console.log("Registering:", { username, email, password });
  };

  return (
    <Box className="flex items-center justify-center min-h-screen bg-gray-100">
      <Box bg="white" p={8} rounded="md" shadow="md" w="full" maxW="md">
        <Text as="h1" fontSize="2xl" mb={6} textAlign="center">
          Register
        </Text>
        <form onSubmit={handleRegister}>
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
              Register
            </Button>
          </VStack>
        </form>
        <Text mt={4} textAlign="center">
          Already have an account?{" "}
          <Link to="/login" style={{ color: "blue" }}>
            Login
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Register;
