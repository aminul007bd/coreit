import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const HeaderWithoutNav = () => {
  const { user, logout } = useAuth();

  return (
    <Box bg="gray.800" color="white" py={4} px={8}>
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">
          My Application
        </Heading>
        <Flex align="center">
          {user && (
            <>
              <Text mr={4}>
                {user.role}: {user.name}
              </Text>
              <Button
                as={RouterLink}
                to="/logout"
                onClick={logout}
                colorScheme="red"
                size="sm"
              >
                Logout
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderWithoutNav;
