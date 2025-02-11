import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function CustomAccordion({ items }) {
  return (
    <Accordion allowMultiple>
      {items.map((item) => (
        <AccordionItem key={item.title}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                {item.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{item.content}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

CustomAccordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};
