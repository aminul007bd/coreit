import { Box, Link, VStack } from "@chakra-ui/react";

import { Link as RouterLink } from "react-router-dom";

const LeftNav = () => {
  const menuItems = [
    { label: "Home", props: { as: RouterLink, to: "/" } },
    { label: "Blog", props: { as: RouterLink, to: "/blog" } },
    { label: "Contact", props: { as: RouterLink, to: "/contact" } },
    { label: "Job", props: { as: RouterLink, to: "/job" } },
    { label: "Service", props: { as: RouterLink, to: "/service" } },
  ];

  return (
    <Box bg="gray.800" color="white" w="200px" p={4}>
      <VStack align="start" spacing={4}>
        {menuItems.map((item, index) => (
          <Link
            key={index}
            as={RouterLink}
            to={item.props.to}
            _hover={{ textDecoration: "none", color: "gray.400" }}
          >
            {item.label}
          </Link>
        ))}
      </VStack>
    </Box>
  );
};

export default LeftNav;
