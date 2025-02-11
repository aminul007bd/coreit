import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { ChevronDownIcon } from "@react/icons";
import PropTypes from "prop-types";

export default function Dropdown({ label, options }) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {label}
      </MenuButton>
      <MenuList>
        {options.map((option) => (
          <MenuItem key={option}>{option}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
