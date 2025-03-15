/* eslint-disable react/prop-types */
"use client";

import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";

import { Controller } from "react-hook-form";
import { Field } from "@chakra-ui/react";

const FormSelect = ({
  control,
  name,
  label,
  options, // Expecting a collection or array
  placeholder = "Select an option",
  width = "320px",
  error,
  ...selectProps
}) => {
  // Ensure collection is always an object with an items array
  const collection = Array.isArray(options)
    ? { items: options.map((opt) => ({
        label: opt.roleName, // Map API response to expected format
        value: opt.id.toString(),
      })) }
    : (options && options.items ? options : { items: [] });

  console.log('options', options);

  return (
    <Field.Root invalid={!!error} width={width}>
      {label && <Field.Label>{label}</Field.Label>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <SelectRoot
            name={field.name}
            value={field.value}
            onValueChange={(val) => {
                console.log("Selected value (before fix):", val);
                
                // Fix: Extract string value instead of an object
                const selectedValue = Array.isArray(val) ? val[0] : val;
      
                console.log("Selected value (after fix):", selectedValue);
                field.onChange(selectedValue);
              }}
            onInteractOutside={() => field.onBlur()}
            collection={collection}
            {...selectProps}
          >
            <SelectTrigger>
              <SelectValueText placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {Array.isArray(collection.items) && collection.items.length > 0 ? (
                collection.items.map((item) => (
                  <SelectItem key={item.value} item={item}>
                    {item.label}
                  </SelectItem>
                ))
              ) : (
                <div>No options available</div> 
              )}
            </SelectContent>
          </SelectRoot>
        )}
      />
      {error && <Field.ErrorText>{error.message}</Field.ErrorText>}
    </Field.Root>
  );
};

export default FormSelect;