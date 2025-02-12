import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

const HeaderWithoutNav = () => {
  return (
    <Box bg="white" color="gray.500" py={4} px={8}>
      <Flex justify="space-between" align="center">
        <Heading as="h1" size="lg">
          My Application
        </Heading>
        <Flex align="center">
          <Text mr={4}>User Role: User Name</Text>
          <Button as={RouterLink} to="/logout" colorScheme="red" size="sm">
            Logout
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default HeaderWithoutNav;