import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

const Portfolio = () => {
  const { id } = useParams()

  const portfolios = [
    { id: '1', title: 'Portfolio 1', content: 'Content of Portfolio 1' },
    { id: '2', title: 'Portfolio 2', content: 'Content of Portfolio 2' },
    { id: '3', title: 'Portfolio 3', content: 'Content of Portfolio 3' },
  ]

  const portfolio = portfolios.find((p) => p.id === id);

  if (!portfolio) {
    return <Box><Text>Portfolio not found</Text></Box>;
  }

  return (
    <Box>
      <Text>{portfolio.title}</Text>
      <Text>{portfolio.content}</Text>
    </Box>
  );
};

export default Portfolio;
