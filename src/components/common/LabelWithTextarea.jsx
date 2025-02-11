import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";

export default function LabelWithTextarea({
  label,
  name,
  placeholder,
  required,
}) {
  const { register } = useFormContext();

  return (
    <FormControl id={name} mb={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Textarea
        id={name}
        name={name}
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

LabelWithTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};
