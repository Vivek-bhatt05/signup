import React from 'react';
import { Flex,Image,Box,Text} from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Box backgroundColor='#f0f8ff' boxShadow= 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>
      <Flex width='230px' margin='auto' justifyContent='space-between' alignItems='center'>
       <Box p='2'>
          <Image width='100px' src='https://medpick.in/wp-content/uploads/2020/03/Vajra-logo.png' alt='Dan Abramov' />
       </Box>
       <Box p='2'>
       <Text fontWeight="semibold" size='sm' color='#004f95'>HOME</Text>
       </Box>
      </Flex>
    </Box>
  )
}

export default Navbar

