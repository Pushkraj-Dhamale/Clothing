import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Text, Button, Icon, Heading } from '@chakra-ui/react';
import { ShoppingCart } from '@mui/icons-material';

import { useUserContext } from '../contexts/UserContext';
import { getOrdersByUserId } from '../services/OrderServices';
import OrderCard from '../components/OrderCard';


const Orders = () => {

  const navigate = useNavigate();
  const { currentUser } = useUserContext();
  const user = sessionStorage.getItem("currentUser");

  // let myObjectId = String(user);
  // let myObjectIdString = myObjectId.toString()
  
  // console.log(user)
  
  const [currentOrders, setCurrentOrders] = useState("active");
  const [orders, setOrders] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (user) { // Ensure currentUser is not undefined
      
      getOrdersByUserId(user) // Make sure to use the appropriate property for user ID
        .then((result) => {
          console.log(result); // Log the result to check the structure of the data
          var orderArray = result.orders || []; // Make sure to handle the case when result.orders is undefined
          setOrders(orderArray.sort((a, b) => (Number(a.orderDate) - Number(b.orderDate))).reverse());
          let hasActiveOrders = orderArray.some(order => order.status); // Check if any order has an active status
          if (currentOrders === "active" && hasActiveOrders) {
            setIsEmpty(false);
          }
        })
        .catch(error => {
          // Handle any errors with fetching orders here
          console.error('Error fetching orders:', error);
        });
    }
    else{
      console.log(currentUser._id);
    }
  }, [user, currentOrders]);

  return (
    <Box width='100%' my={10}>
      <Box display='flex' justifyContent='center' p={3} alignItems='center' >
        <Text
          textAlign='center'
          fontSize={30}
          fontWeight={currentOrders === "active" ? 600 : 300}
          color='#273E47.500'
          mr={5}
          cursor='pointer'
          onClick={() => setCurrentOrders("active")}
        >Active Orders</Text>
        <Text
          textAlign='center'
          fontSize={30}
          fontWeight={currentOrders === "active" ? 300 : 600}
          color='#273E47.500'
          ml={5}
          cursor='pointer'
          onClick={() => setCurrentOrders("all")}
        >All Orders</Text>
      </Box>
      <Box py={3} px={{ base: 3, md: 5, lg: 10 }} >
        {
          orders.length>0 ? orders.map((order, index) => {
            if (currentOrders === "active") {
              return order.status && <OrderCard key={index} orderId={order._id} />
            } else {
              return <OrderCard key={index} orderId={order._id} />
            }
          })
            :
            <Box
              display='flex'
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
              mt={10}
              p={3}
            >
              <Icon color='#314E89' fontSize={100} as={ShoppingCart} />
              <Heading textAlign='center' fontSize={30} mt={8}  >You don't have any orders.</Heading>
              <Text textAlign='center' fontSize={24} mt={2} fontWeight={300} >Check out our bestsellers and find something for you!</Text>
              <Button
                variant='solid'
                fontSize={20}
                px={10} mt={10}
                color='#273E47'
                onClick={() => navigate('/')}>
                Start Shopping
              </Button>
            </Box>
        }
        {
          isEmpty &&
          <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            mt={10}
            p={3}
          >
            <Icon color='#314E89' fontSize={100} as={ShoppingCart} />
            <Heading textAlign='center' fontSize={30} mt={8}  >You don't have any active orders.</Heading>
            <Text textAlign='center' fontSize={24} mt={2} fontWeight={300} >Check out our bestsellers and find something for you!</Text>
            <Button
              variant='solid'
              fontSize={20}
              px={10} mt={10}
              color='#273E47'
              onClick={() => navigate('/')}>
              Start Shopping
            </Button>
          </Box>
        }
      </Box>
    </Box>
  )
}

export default Orders;