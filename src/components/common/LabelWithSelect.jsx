import { FormControl, FormLabel, Select } from "@chakra-ui/react";

import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import { useState } from "react";

export default function LabelWithSelect({ label, name, options }) {
  const { setValue, watch } = useFormContext();
  const selectedValue = watch(name);
  const [selected, setSelected] = useState(
    options.find((option) => option.value === selectedValue) || options[0]
  );

  const handleChange = (event) => {
    const value = event.target.value;
    const selectedOption = options.find((option) => option.value === value);
    setSelected(selectedOption);
    setValue(name, value);
  };

  return (
    <FormControl id={name} mb={4}>
      <FormLabel>{label}</FormLabel>
      <Select
        value={selected.value}
        onChange={handleChange}
        placeholder="Select option"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}

LabelWithSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};
