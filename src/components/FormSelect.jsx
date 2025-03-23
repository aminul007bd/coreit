"use client";

import { Field, Portal, Select, createListCollection } from "@chakra-ui/react";
import { Controller } from "react-hook-form";

const FormSelect = ({
  name,
  label,
  control,
  error,
  options,
  placeholder = "Select an option",
  width = "320px",
}) => {
  const collection = createListCollection({
    items: options,
  });

  return (
    <Field.Root invalid={!!error} width={width}>
      <Field.Label>{label}</Field.Label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Select.Root
            name={field.name}
            value={field.value}
            onValueChange={({ value }) => field.onChange(value)}
            onInteractOutside={() => field.onBlur()}
            collection={collection}
          >
            <Select.HiddenSelect />
            <Select.Control>
              <Select.Trigger>
                <Select.ValueText placeholder={placeholder} />
              </Select.Trigger>
              <Select.IndicatorGroup>
                <Select.Indicator />
              </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
              <Select.Positioner>
                <Select.Content>
                  {collection.items.map((item) => (
                    <Select.Item item={item} key={item.value}>
                      {item.label}
                      <Select.ItemIndicator />
                    </Select.Item>
                  ))}
                </Select.Content>
              </Select.Positioner>
            </Portal>
          </Select.Root>
        )}
      />
      <Field.ErrorText>{error?.message}</Field.ErrorText>
    </Field.Root>
  );
};

export default FormSelect;
