import * as React from 'react'
import { Box } from '@chakra-ui/react';
import Home from './components/Home/Home';

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box className='flex justify-center flex-col items-center pt-10'>
        <Home />
      </Box>
    </ChakraProvider>
  )
}

export default App;
