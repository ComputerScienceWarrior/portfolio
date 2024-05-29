import React from "react"
import { Box } from "@chakra-ui/react"
import Portfolio from "../Portfolio/Portfolio"

const Portfolios = () => {
    return (
        <Box className="grid-row-columns">
            <Portfolio number={1} />
            <Portfolio number={2} /> 
            <Portfolio number={3} />
        </Box>
    )
}

export default Portfolios;
