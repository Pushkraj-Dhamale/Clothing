import React from 'react';
import { Box, Text, IconButton, Container } from '@chakra-ui/react';
import { Apple, Google, Instagram, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box mt={5} className='footer' >
      <Box
        bg='whitesmoke'
        display='flex'
        justifyContent='space-around'
        flexDirection={{ base: 'column', sm: 'row' }}
      >
        <Container display='flex' maxW='1200px' justifyContent='space-between' flexDirection={{base:'column',sm:'row'}} >
          <Box py={5}>
            <Text mb={1} textAlign='center' color='blackAlpha.700' fontSize={20} fontWeight={600} >Follow Us</Text>
            <Box display='flex' justifyContent='center' >
              <IconButton mr={3} color='blackAlpha' variant='ghost' _hover={{ color: '#C13584' }} as={Instagram} /> 
              <IconButton mr={3} color='blackAlpha' variant='ghost' _hover={{ color: 'red' }} as={YouTube} />
              <IconButton color='blackAlpha' variant='ghost' _hover={{ color: 'twitter.500' }} as={Twitter} />
            </Box>
          </Box>
        
        </Container>
      </Box>
      <Container maxW='1200px'display='flex' py={10} justifyContent='space-between' flexDirection={{base:'column',sm:'row'}}  >
            <Box textAlign={{base:'center',sm:'start'}} py={5} >
              <Text fontSize={24} fontWeight={600} >Quotes:</Text>
              <Text mt={2} _hover={{ textDecoration: 'underline' }} >"Fashion is the armor to survive the reality of everyday life." – Bill Cunningham</Text>
              <Text mt={2} _hover={{ textDecoration: 'underline' }} >"Dress like you've made something of yourself in the world, even if you haven't." – Pushkraj Dhamale</Text>
              <Text mt={2} _hover={{ textDecoration: 'underline' }} >"Fashion is about dressing according to what's fashionable. Style is more about being yourself." – Oscar de la Renta</Text>
            </Box>
            
      </Container>
      {/* <Box bg='whitesmoke' display='flex' justifyContent='center'
      >
        <Text color='blackAlpha' fontSize={20} p={5} >Made by <a href='https://github.com/AhmedSemih' rel='noreferrer' target='_blank' ><i>Ahmed Semih Erkan</i></a></Text>
      </Box> */}
    </Box>
  )
}

export default Footer;