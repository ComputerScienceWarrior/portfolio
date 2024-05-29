import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <Box>
            <Box>
                <Text fontFamily={'cursive'} className="text-4xl text-center text-white italic">
                    James-Ryan Stampley
                </Text>
            </Box>
            <Box className="flex-col justify-center mt-64 mb-64">
                <Text className="space-x-4">
                    <Button
                        colorScheme="blue"
                        size={'lg'}
                        onClick={() => handleNavigation('/portfolios')}
                    >
                        Portfolio Projects
                    </Button>
                    <Button
                        colorScheme="green"
                        size={'lg'}
                        onClick={() => handleNavigation('/resume')}
                    >
                        Resume
                    </Button>
                    <Button
                        colorScheme="red"
                        size={'lg'}
                        onClick={() => handleNavigation('/about')}
                    >
                        About Me
                    </Button>
                </Text>
            </Box>
        </Box>
    );
};

export default Home;
