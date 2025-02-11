import { Tooltip as ChakraTooltip } from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function Tooltip({ children, text }) {
  return (
    <ChakraTooltip label={text} aria-label={text} hasArrow>
      {children}
    </ChakraTooltip>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
