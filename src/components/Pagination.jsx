import { Button, ButtonGroup } from "@chakra-ui/react";

import PropTypes from "prop-types";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center">
      <ButtonGroup isAttached>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={() => onPageChange(page)}
            colorScheme={page === currentPage ? "blue" : "gray"}
            variant={page === currentPage ? "solid" : "outline"}
          >
            {page}
          </Button>
        ))}
      </ButtonGroup>
    </nav>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
