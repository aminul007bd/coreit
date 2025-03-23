import { RadioGroup, VStack } from "@chakra-ui/react";

const RadioGroupComponent = ({ items, value, onChange, name, onBlur }) => {
  return (
    <RadioGroup.Root
      colorPalette="orange"
      name={name}
      value={value}
      onValueChange={({ value }) => onChange(value)}
    >
      <VStack gap="2" align="start">
        {items?.map((item) => (
          <RadioGroup.Item key={item.value} value={item.value}>
            <RadioGroup.ItemHiddenInput onBlur={onBlur} />
            <RadioGroup.ItemIndicator />
            <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
            <RadioGroup.ItemText marginLeft={4}>{item.createdDate}</RadioGroup.ItemText>
          </RadioGroup.Item>
        ))}
      </VStack>
    </RadioGroup.Root>
  );
};

export default RadioGroupComponent;
