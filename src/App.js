import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box, ChakraProvider } from '@chakra-ui/react';
import Home from './components/Home/Home';
import Portfolios from './components/Portfolios/Portfolios';
import Resume from './components/Resume/Resume';
import About from './components/About/About';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box 
          className='flex justify-center flex-col items-center pt-10 bg-blue-900' 
          minH="100vh" 
          w="100vw"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolios" element={<Portfolios />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
