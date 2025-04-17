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

import React from 'react';

function MedicalCondition() {
  const conditions = [
    {
      title: 'Digestive conditions',
      description:
        'Gastroesophageal reflux disease, Irritable bowel syndrome, Stomach/Peptic Ulcers, Gallstones, Lactose Intolerance, Diverticulitis, Inflammatory Bowel Disease (IBD), Celiac Disease, Constipation, Other...',
    },
    {
      title: 'Heart or Circulatory conditions',
      description:
        'Coronary Artery Disease (CAD), Heart Arrhythmias, Heart Failure, Heart Attack, Heart Valve Disease, Pericardial Disease, Cardiomyopathy (Heart Muscle Disease), Congenital Heart Disease, Peripheral artery disease, Stroke, High Blood Pressure, Low Blood Pressure, Heart trouble/disease, Artificial Heart Valve, Other...',
    },
    {
      title: 'Neurological conditions',
      description:
        'ALS, Arteriovenous Malformation, Brain Aneurysm, Brain Tumors, Epilepsy, Seizures, Stroke, Migraines/severe headaches, Memory Disorders, Parkinson\'s Disease, Alzheimer\'s or Dementia, Other...',
    },
    {
      title: 'Lung or Breathing conditions',
      description:
        'Asthma, Chronic obstructive pulmonary disease (COPD), Chronic bronchitis, Emphysema, Pneumonia, Cystic fibrosis, Pulmonary edema, Lung cancer, Acute respiratory distress syndrome (ARDS), Tuberculosis, Other...',
    },
    {
      title: 'Autoimmune conditions',
      description:
        'Arthritis, Systemic lupus erythematosus, Inflammatory Bowel Disease (IBD), Multiple sclerosis (MS), Diabetes, Psoriasis, Graves\' disease, Hashimoto\'s thyroiditis, Myasthenia gravis, Vasculitis, Other...',
    },
  ];

  return (
    <Box maxW="800px" mx="auto" p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Box mb="6">
        <Text fontSize="2xl" fontWeight="bold">
          Medical Conditions
        </Text>
        <Text fontSize="sm" color="gray.500">
          Step 2 <small>/ 4</small>
        </Text>
      </Box>

      {conditions.map((condition, index) => (
        <FormControl as="fieldset" mb="6" key={index}>
          <FormLabel as="legend" fontWeight="bold">
            Do you have a history or are currently being treated for any {condition.title}?
          </FormLabel>
          <Text fontSize="sm" color="gray.500" mb="2">
            {condition.description}
          </Text>
          <RadioGroup>
            <Stack direction="row">
              <Radio value="yes">Yes</Radio>
              <Radio value="no">No</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
      ))}

      <Text fontSize="sm" color="gray.500" mb="4">
        * Mandatory fields
      </Text>

      <Stack direction="row" justify="space-between">
        <Button colorScheme="gray">Back</Button>
        <Button colorScheme="blue">Next</Button>
      </Stack>
    </Box>
  );
}

export default MedicalCondition;