// src/components/Header.jsx
import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box 
      position="fixed" // Fix the header to the top
      top={0} 
      left={0} 
      width="100%" 
      bg="rgba(255, 255, 255, 0.5)" // Set a transparent background
      backdropFilter="blur(10px)" // Optional: adds a blur effect to the background
      zIndex={1} // Ensures the header is above other content
      padding={4} // Add padding for aesthetics
    >
      <Image src="/img/logo.png" alt="Logo" boxSize="100px"/>
      <Flex align="center" justify="space-between">
        <Text fontSize="lg" fontWeight="bold">My Website</Text>
        {/* Add other header items like navigation links here */}
      </Flex>
    </Box>
  );
};

export default Header; // Ensure it's exported
