import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { Stack, createListCollection } from "@chakra-ui/react";

import PropTypes from "prop-types";

const LabelWithSelect = ({ label, options }) => {
  const collection = createListCollection({ items: options });

  return (
    <Stack gap="5" width="320px">
      <SelectRoot size="md" collection={collection}>
        <SelectLabel>{label}</SelectLabel>
        <SelectTrigger>
          <SelectValueText placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          {collection.items.map((option) => (
            <SelectItem item={option} key={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectRoot>
    </Stack>
  );
};

LabelWithSelect.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default LabelWithSelect;
