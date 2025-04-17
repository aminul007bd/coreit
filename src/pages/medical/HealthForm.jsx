import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';

import React from 'react';

function HealthForm() {
  return (
    <Box maxW="600px" mx="auto" p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Text fontSize="2xl" fontWeight="bold" mb="6">
        General Health Form
      </Text>

      {/* Question 1 */}
      <FormControl as="fieldset" mb="4">
        <FormLabel as="legend">Are you currently under the care of a physician (other than PC)?</FormLabel>
        <RadioGroup>
          <Stack direction="row">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {/* Question 2 */}
      <FormControl mb="4">
        <FormLabel>Date of last physical exam</FormLabel>
        <Input type="text" placeholder="Enter date" />
      </FormControl>

      {/* Question 3 */}
      <FormControl as="fieldset" mb="4">
        <FormLabel as="legend">Are you presently being treated for any injury or illness?</FormLabel>
        <RadioGroup>
          <Stack direction="row">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {/* Question 4 */}
      <FormControl as="fieldset" mb="4">
        <FormLabel as="legend">Have you been hospitalized for an injury or illness within the last 12 months?</FormLabel>
        <RadioGroup>
          <Stack direction="row">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {/* Question 5 */}
      <FormControl as="fieldset" mb="4">
        <FormLabel as="legend">Are you required to pre-med with antibiotics before dental treatment?</FormLabel>
        <RadioGroup>
          <Stack direction="row">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {/* Question 6 */}
      <FormControl as="fieldset" mb="4">
        <FormLabel as="legend">Do you use or have you ever used tobacco?</FormLabel>
        <RadioGroup>
          <Stack direction="row">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {/* Question 7 */}
      <FormControl as="fieldset" mb="4">
        <FormLabel as="legend">Have you ever had an allergic reaction?</FormLabel>
        <Text fontSize="sm" color="gray.500" mb="2">
          Aspirin, Ibuprofen, Acetaminophen, Codeine, Penicillin, Erythromycin, Tetracycline, Acrylic, Sulfa, Local
          anesthetic, Fluoride, Metals, Iodine, Barbiturates or sedatives, Latex, Other...
        </Text>
        <RadioGroup>
          <Stack direction="row">
            <Radio value="yes">Yes</Radio>
            <Radio value="no">No</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      <Text fontSize="sm" color="gray.500" mb="4">
        * Mandatory fields
      </Text>

      <Button colorScheme="blue" width="full">
        Next
      </Button>
    </Box>
  );
}

export default HealthForm;