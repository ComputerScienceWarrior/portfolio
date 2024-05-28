import * as React from 'react'
import { Box } from '@chakra-ui/react';

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box className='text-center text-red-500'>
        Hello World... with Chakra UI.
      </Box>
    </ChakraProvider>
  )
}

export default App;
