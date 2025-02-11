import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Card({ children }) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="sm"
    >
      {children}
    </Box>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
