import { createListCollection } from "@chakra-ui/react";
import { Controller } from "react-hook-form";

import { Field } from "@/components/ui/field";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";

const SelectField = ({ control, name, label, placeholder, items, lazyMount, error }) => {
  const collection = createListCollection({ items });

  return (
    <Field label={label} invalid={!!error} errorText={error} fontSize="sm">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <SelectRoot
            name={field.name}
            value={field.value}
            onValueChange={({ value }) => field.onChange(value)}
            onInteractOutside={() => field.onBlur()}
            collection={collection}
            lazyMount={lazyMount}
          >
            <SelectTrigger>
              <SelectValueText placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {collection.items.map((item) => (
                <SelectItem item={item} key={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        )}
      />
    </Field>
  );
};

export default SelectField;
