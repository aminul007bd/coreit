import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { useRef } from 'react';

import SignatureCanvas from 'react-signature-canvas';

function PatientSign() {
  const signaturePadRef = useRef(null);

  const clearSignature = () => {
    signaturePadRef.current.clear();
  };

  return (
    <Box maxW="800px" mx="auto" p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Box mb="6">
        <Text fontSize="2xl" fontWeight="bold">
          Patient Signature
        </Text>
        <Text fontSize="sm" color="gray.500">
          Step 4 <small>/ 4</small>
        </Text>
      </Box>

      {/* Signing As */}
      <FormControl as="fieldset" mb="6" isRequired>
        <FormLabel as="legend" fontWeight="bold">
          Signing as
        </FormLabel>
        <RadioGroup>
          <Stack direction="row">
            <Radio value="patient">Patient</Radio>
            <Radio value="parent">Parent / Guardian</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {/* Signature */}
      <FormControl as="fieldset" mb="6" isRequired>
        <FormLabel as="legend" fontWeight="bold">
          Signature (touch to draw)
        </FormLabel>
        <Box
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          position="relative"
          height="250px"
          bg="gray.50"
        >
          <SignatureCanvas
            ref={signaturePadRef}
            penColor="black"
            canvasProps={{
              width: 600,
              height: 250,
              style: { touchAction: 'none' },
            }}
          />
          <Button
            position="absolute"
            top="5px"
            right="5px"
            size="sm"
            colorScheme="red"
            onClick={clearSignature}
          >
            Clear
          </Button>
        </Box>
        <Text fontSize="sm" color="gray.500" mt="2">
          By drawing in the box above, I understand and agree that this is a legal representation of my signature.
        </Text>
      </FormControl>

      <Text fontSize="sm" color="gray.500" mb="4">
        * Mandatory fields
      </Text>

      {/* Navigation Buttons */}
      <Stack direction="row" justify="space-between">
        <Button colorScheme="gray">Back</Button>
        <Button colorScheme="blue">Submit</Button>
      </Stack>
    </Box>
  );
}

export default PatientSign;