import React from 'react'
import { Flex,Image,Box,Text} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box backgroundColor='#f0f8ff' boxShadow= 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'>
    <Flex justifyContent='space-around'>
      <Flex width='500px'  justifyContent='center' alignItems='center'>
       <Box p='2'>
          <Image width='100px' src='https://medpick.in/wp-content/uploads/2020/03/Vajra-logo.png' alt='Dan Abramov' />
       </Box>
       <Box p='2'>
       <Image width='20px' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/All_rights_reserved_logo.svg/1024px-All_rights_reserved_logo.svg.png' alt='Dan Abramov' />
       </Box>
       <Box>
       <Text  size='sm'>2022 VIZI, All Rights Reserved</Text>
       </Box>
      </Flex>
      
      <Flex width='500px'  justifyContent='center' alignItems='center'>
       <Box>
       <Text  size='sm'>Terms & Conditions | FAQs</Text>
       </Box>
      </Flex>

    </Flex>  
    </Box>
  )
}

export default Footer
