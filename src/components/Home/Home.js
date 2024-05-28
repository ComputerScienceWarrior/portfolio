import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
    return (
        <Box className="flex-col justify-center">
            <Text className="text-4xl text-center text-green-700 italic underline">
                Welcome to my Page!
            </Text>
            <Text className="space-x-4">
                <Button colorScheme="blue" size={'lg'} >
                    Portfolio Projects
                </Button>
                <Button colorScheme="green" size={'lg'} >
                    Resume
                </Button>
                <Button colorScheme="red" size={'lg'} >
                    About Me
                </Button>
            </Text>
        </Box>
    )
}

export default Home;
