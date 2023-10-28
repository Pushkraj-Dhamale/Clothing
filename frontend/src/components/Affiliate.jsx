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
      title: 'Product 1',
      affiliateLink: 'https://www.google.com',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
      productLink: 'https://www.google.com',
      title: 'Product 1',
      affiliateLink: 'https://www.google.com',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
      productLink: 'https://www.google.com',
      title: 'Product 1',
      affiliateLink: 'https://www.google.com',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
      productLink: 'https://www.google.com',
      title: 'Product 1',
      affiliateLink: 'https://www.google.com',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
      productLink: 'https://www.google.com',
      title: 'Product 1',
      affiliateLink: 'https://www.google.com',
    },

    {
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png',
      productLink: 'https://www.google.com',
      title: 'Product 1',
      affiliateLink: 'https://www.google.com',
    },
    // Your product data here...
  ];

  const productsPerRow = 3; // Number of products to display in one row

  const renderProducts = () => {
    const productRows = [];
    for (let i = 0; i < affiliateData.length; i += productsPerRow) {
      const row = affiliateData.slice(i, i + productsPerRow);
      productRows.push(row);
    }

    return productRows.map((row, rowIndex) => (
      <Stack
        key={rowIndex}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        align="center"
        justify="center"
      >
        {row.map((item, index) => (
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
            <Text fontWeight={500} fontSize={26} mt={4}>
              {item.title}
            </Text>
          </Box>
        ))}
      </Stack>
    ));
  };

  return <Stack direction="column" spacing={4} align="center" justify="center">{renderProducts()}</Stack>;
};

export default Affiliate;
