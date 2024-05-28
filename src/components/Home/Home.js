import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
    return (
        <Box>
            <Box>
                <Text className="text-4xl text-center text-white italic underline">
                    Welcome to my Page!
                </Text>
            </Box>
            <Box className="flex-col justify-center mt-64 mb-64">
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
        </Box>
    )
}

export default Home;
