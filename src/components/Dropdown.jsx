import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import PropTypes from "prop-types";

export default function Dropdown({ label, options }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
        {label}
      </MenuButton>
      <MenuItems className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        {options.map((option) => (
          <MenuItem key={option}>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-gray-100" : ""
                } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
              >
                {option}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
