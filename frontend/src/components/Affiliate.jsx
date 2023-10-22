import React from 'react';
import { Box, Text, Stack } from '@chakra-ui/react'; // Import Box and Text components
import { Image } from '@chakra-ui/react'; // Import Image component
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Affiliate = () => {
  const navigate = useNavigate(); // Define navigate here

  const affiliateData = [
    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
      productLink: 'https://www.google.com',
      title: 'Hoodeis wagerawagera',
      affiliateLink: 'https://www.google.com',
    },
    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
      productLink: 'https://www.google.com',
      title: 'Product 2',
      affiliateLink: 'https://www.google.com',
    },
    // Add more affiliate items as needed
  ];

  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={4}
      align="center"
      justify="center"
    >
      {affiliateData.map((item, index) => (
        <Box
          key={index}
          width="100%"
          bg="#fff"
          maxWidth="500px"
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          cursor="pointer"
          onClick={() => navigate(item.affiliateLink)}
        >
          <Image
            width="100%"
            height="auto"
            src={item.imageUrl}
            alt={item.title}
            onClick={() => (window.location.href = item.affiliateLink)}
          />
          <Text
            fontWeight={500}
            fontSize={26}
            mt={4}
            onClick={() => (window.location.href = item.affiliateLink)}
          >
            {item.title}
          </Text>
        </Box>
      ))}
    </Stack>
  );
};

export default Affiliate;
