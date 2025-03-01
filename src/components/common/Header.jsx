import { Box, Flex, Link } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <Box bg="blue.800" color="white" py={4}>
      <Flex
        maxW="container.xl"
        mx="auto"
        justify="space-between"
        align="center"
      >
        <Flex padding="2" marginLeft={4}>
          <Box align="start">
            <Link
              as={RouterLink}
              to="/"
              mr={4}
              _hover={{ textDecoration: "underline" }}
            >
              Home
            </Link>
            <Link
              as={RouterLink}
              to="/blog"
              mr={4}
              _hover={{ textDecoration: "underline" }}
            >
              Blog
            </Link>
            <Link
              as={RouterLink}
              to="/contact"
              mr={4}
              _hover={{ textDecoration: "underline" }}
            >
              Contact
            </Link>
            <Link
              as={RouterLink}
              to="/job"
              mr={4}
              _hover={{ textDecoration: "underline" }}
            >
              Job
            </Link>
            <Link
              as={RouterLink}
              to="/users"
              mr={4}
              _hover={{ textDecoration: "underline" }}
            >
              Users
            </Link>
          </Box>
          <Box align="end">
            <Link
              as={RouterLink}
              to="/login"
              _hover={{ textDecoration: "underline" }}
            >
              Login
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
