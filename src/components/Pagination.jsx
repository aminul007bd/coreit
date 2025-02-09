import { Menu, MenuButton } from "@headlessui/react";

import PropTypes from "prop-types";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center">
      <ul className="inline-flex items-center -space-x-px">
        {pages.map((page) => (
          <li key={page}>
            <Menu>
              {({ open }) => (
                <>
                  <MenuButton
                    onClick={() => onPageChange(page)}
                    className={`px-3 py-2 leading-tight ${
                      page === currentPage
                        ? "text-blue-600 bg-blue-50 border border-blue-300"
                        : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    }`}
                  >
                    {page}
                  </MenuButton>
                </>
              )}
            </Menu>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
