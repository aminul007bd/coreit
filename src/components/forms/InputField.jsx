import { Input } from "@chakra-ui/react";

import { Field } from "@/components/ui/field";

const InputField = ({ label, name, register, errors, placeholder, type = "text" }) => {
  return (
    <Field
      label={label}
      invalid={!!errors[name]}
      errorText={errors[name]?.message} // Ensure error message displays
    >
      <Input placeholder={placeholder} type={type} {...register(name)} />
    </Field>
  );
};

export default InputField;
