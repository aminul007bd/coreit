import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

export default function CustomBreadcrumb({ items }) {
  return (
    <Breadcrumb spacing="8px">
      {items.map((item, index) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink as={RouterLink} to={item.href}>
            {item.label}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
}

CustomBreadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
