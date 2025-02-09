import { Input, Label } from "@headlessui/react";

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
    <div className="mb-4">
      <Label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </Label>
      <Input
        id={name}
        name={name}
        type="text"
        placeholder={placeholder}
        {...register(name, { required })}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
}

LabelWithTextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};
