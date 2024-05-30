import React from "react";
import { Box, Button } from "@chakra-ui/react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import { useNavigate } from "react-router-dom";

const Portfolios = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const images = [
    {
      src: 'https://via.placeholder.com/600x400',
      alt: 'Image 1',
      button: <Button onClick={() => handleNavigation('/portfolio/1')}>View Portfolio 1</Button>,
    },
    {
      src: 'https://via.placeholder.com/600x400',
      alt: 'Image 2',
      button: <Button onClick={() => handleNavigation('/portfolio/2')}>View Portfolio 2</Button>,
    },
    {
      src: 'https://via.placeholder.com/600x400',
      alt: 'Image 3',
      button: <Button onClick={() => handleNavigation('/portfolio/3')}>View Portfolio 3</Button>,
    },
  ];

  return (
    <Box>
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
        <ImageCarousel images={images} />
      </div>
    </Box>
  );
};

export default Portfolios;
