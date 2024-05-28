import * as React from 'react'

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box>
        Hello World... with Chakra UI.
      </Box>
    </ChakraProvider>
  )
}

export default App;