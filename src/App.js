import * as React from 'react'
import { Box } from '@chakra-ui/react';
import Home from './components/Home/Home';

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider className="bg-blue-900">
      <Box className='flex justify-center flex-col items-center pt-10 bg-blue-900'>
        <Home />
      </Box>
    </ChakraProvider>
  )
}

export default App;
