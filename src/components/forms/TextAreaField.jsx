 
import { Textarea } from "@chakra-ui/react";

import { Field } from "@/components/ui/field";

const TextAreaField = ({ label, name, register, errors, placeholder, helperText, maxLength }) => {
  return (
    <Field
      label={label}
      helperText={`${helperText} Max ${maxLength} characters.`}
      invalid={!!errors[name]}
      errorText={errors[name]?.message}
    >
      <Textarea size="xl" placeholder={placeholder} {...register(name)} maxLength={maxLength} />
    </Field>
  );
};

export default TextAreaField;
