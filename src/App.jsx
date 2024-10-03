import React from 'react';
import { ChakraProvider, Box, Text } from '@chakra-ui/react'; // Import ChakraProvider
import Header from './components/Header'; // Make sure to capitalize "Header"

function App() {
  return (
    <ChakraProvider>
      <Header /> {/* Use Header with uppercase 'H' */}
      <Box paddingTop="60px"> {/* Add padding to prevent content from being hidden behind the fixed header */}
        <Text fontSize="xl">Welcome to the site!</Text>
        {/* Your other content goes here */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
