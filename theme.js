import { createSystem, defaultConfig } from '@chakra-ui/react';

export const customTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Figtree', sans-serif` },
        body: { value: `'Figtree', sans-serif` },
      },
      styles: {
        global: {
          'html, body': {
            backgroundColor: 'white',
            color: 'black',
          },
        },
      },
    },
  },
});

export default customTheme;