import { Label } from "@headlessui/react";
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
    <div className="mb-4">
      <Label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </Label>
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        {...register(name, { required })}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    </div>
  );
}

LabelWithTextarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};
