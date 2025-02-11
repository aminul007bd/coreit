import { Box, Button, Flex, Link } from "@chakra-ui/react";
import {
  MenuContent,
  MenuContextTrigger,
  MenuItem,
  MenuRoot,
} from "../ui/menu";

import { Link as RouterLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <Box bg="gray.800" color="white" py={4}>
      <Flex
        maxW="container.xl"
        mx="auto"
        justify="space-between"
        align="center"
      >
        <Flex>
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
            to="/service"
            mr={4}
            _hover={{ textDecoration: "underline" }}
          >
            Service
          </Link>
        </Flex>
        <Flex align="center">
          {user ? (
            <MenuRoot>
              <MenuContextTrigger
                as={Button}
                bg="white"
                color="gray.700"
                _hover={{ bg: "gray.100" }}
              >
                Account
              </MenuContextTrigger>
              <MenuContent>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuContent>
            </MenuRoot>
          ) : (
            <Link
              as={RouterLink}
              to="/login"
              _hover={{ textDecoration: "underline" }}
            >
              Login
            </Link>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
