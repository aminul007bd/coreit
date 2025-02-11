import { FormControl, FormLabel, Input } from "@chakra-ui/react";

import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

export default function LabelWithTextField({
  label,
  name,
  placeholder,
  required,
}) {
  const { register } = useFormContext();

  return (
    <FormControl id={name} mb={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        {...register(name, { required })}
        mt={1}
        w="full"
        px={3}
        py={2}
        borderWidth="1px"
        borderRadius="md"
        shadow="sm"
        focusBorderColor="indigo.500"
        focusRingColor="indigo.500"
        textStyle="sm"
      />
    </FormControl>
  );
}

LabelWithTextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};
