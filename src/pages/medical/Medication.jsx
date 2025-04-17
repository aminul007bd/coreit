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

function Medication() {
  const medications = [
    {
      title: 'Pain medications',
      description:
        'Acetaminophen, Aspirin, Codeine, Demerol (Meperidine), Hydrocodone (Vicodin/Lortan/Norco), Ibuprofen, Percocet (Oxycodone), Ultram (Tramadol), Other...',
    },
    {
      title: 'Antidepressants or Anxiety medications',
      description:
        'Adderall, Cymbalta (Duloxetine), Neurontin (Gabapentin), Xanax (Alprazolam), Ambien (Zolpidem), Effexor (Venlafaxine), Oleptro (Trazodone), Wellbutrin (Buproprion), Celexa (Citalopram), Lexapro (Escitalopram), Prozac (Fluoxetine), Zoloft (Sertraline), Other...',
    },
    {
      title: 'Diabetes, Cholesterol, or Blood Pressure medications',
      description:
        'Avapro (Irbesartan), Crestor (Rosuvastatin), Lipitor (Atorvastatin Calcium), Metformin (Glucophage), Plavix (Clopidogrel), Tenormin (Atenolol), Zestoretic (Lisinopril), Coreg (Carvedilol), Klor-Con (Potassium Chloride), Lopressor (Metoprolol), Microzide (Hydrochlorothiazide), Pravachol (Pravastatin), Toprol XL (Metoprolol), Zocor (Simvastatin), Coumadin (Warfarin), Lasix (Furosemide), Losartan (Cozaar), Norvasc (Amlodipine), Prinivil (Lisinopril), Tricor (Fenofibrate), Other...',
    },
    {
      title: 'Allergy or Asthma medications',
      description:
        'Allegra (Fexofenadine), Claritin, Alavert (Loratadine), Flonase (Fluticasone), Singulair (Montelukast), Zyrtec (Cetirizine), Ventolin (Albuterol Inhaler), Tavist (Clemastine), Benadryl (Diphenhydramine), Astelin (Azelastine), Clarinex, Other...',
    },
    {
      title: 'Antibiotics',
      description:
        'Azithromycin, Amoxicillin, Clindamycin, Cephalexin, Ciprofloxacin, Doxycycline, Tetracycline, Levofloxacin, Metronidazole, Other...',
    },
    {
      title: 'Other medications or dietary supplements',
      description: '',
    },
  ];

  return (
    <Box maxW="800px" mx="auto" p="6" borderWidth="1px" borderRadius="lg" boxShadow="lg">
      <Box mb="6">
        <Text fontSize="2xl" fontWeight="bold">
          Medications
        </Text>
        <Text fontSize="sm" color="gray.500">
          Step 3 <small>/ 4</small>
        </Text>
      </Box>

      {medications.map((medication, index) => (
        <FormControl as="fieldset" mb="6" key={index}>
          <FormLabel as="legend" fontWeight="bold">
            Are you taking any {medication.title}?
          </FormLabel>
          {medication.description && (
            <Text fontSize="sm" color="gray.500" mb="2">
              {medication.description}
            </Text>
          )}
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

export default Medication;