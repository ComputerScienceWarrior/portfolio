import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Portfolio = (props) => {
    return (
        <Box>
            <Text>
                Portfolio {props.number}
            </Text>
        </Box>
    )
}

export default Portfolio;
