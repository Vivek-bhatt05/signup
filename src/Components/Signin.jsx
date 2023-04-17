import React from 'react'
import { Box, Button, Container, Heading } from '@chakra-ui/react'
import { Flex,Image,Text} from '@chakra-ui/react'
import {FormControl, FormLabel,Input} from '@chakra-ui/react'
import hand from '../Assets/hand.jpeg'
import target from '../Assets/target.jpeg'
import targethand from '../Assets/targethand.jpeg'


const Signin = () => {

    const arr=[
        {
            id:1,
            pic:targethand,
            headline:"Digitize",
            para:"A Bird eye view of the entire Biomedical Operations."
        },
        {
            id:2,
            pic:target,
            headline:"Track",
            para:"Track the product life cycle and service history."
        },
        {
            id:3,
            pic:hand,
            headline:"Biomedical Budget",
            para:"Regulate and save budget through analysed data and informed"
        }
    ]



  return (
    <>
    <Box display='flex'>
      <Container borderRadius='20px' marginTop='40px' marginBottom='70px' backgroundColor='#004f95' padding='20px'>
        <Heading color='white'>Features</Heading>

      {arr.map((item)=>(
        <Box margin='20px' display='flex' justifyContent='space-around'>
         <Box>
          <Image justifyContent='center' width='100px' alignItems='center' src={item.pic} />
         </Box>
         <Box textAlign='left' width='400px'>
          <Heading color='white'>{item.headline}</Heading>
          <Text color='white'>{item.para}</Text>
         </Box>
       </Box>
      ))}
       

      </Container>


      <Container borderRadius='20px' marginTop='40px' marginBottom='70px' backgroundColor='#f0f8ff' boxShadow= 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'  padding='20px'>
      <Text fontWeight="semibold" size='sm' color='orange'>Sign in</Text>
      <br />
      <hr />
     <Box marginTop='15px' >
      <Text fontWeight="semibold" size='sm' color='#004f95'>Sign in to your account</Text> 
     <FormControl>
        <FormLabel>Email Id</FormLabel>
        <Input backgroundColor='white' type='email' />

        <FormLabel marginTop='10px' >Password</FormLabel>
        <Input backgroundColor='white' type='password' />

        <Text marginTop='10px' size='sm' color='red'>Forgot Password</Text>

        <Button marginTop='20px' colorScheme='blue' width='500px'>Sign in</Button>

     </FormControl>
       <Box width='210px'margin='auto' marginTop='20px' justifyContent='space-between' display='flex'>
        <Text size='sm' color='gray'>New to vajra?</Text>
        <Text color='orange'>Sign Up Now</Text>
       </Box>
        
     </Box>
      </Container>
    </Box>



    <Box marginBottom='70px'>
    <Flex width='500px' margin='auto' justifyContent='space-between' alignItems='center'>

    <Box p='2' width='500px' >
    <Text fontWeight="semibold" size='sm' color='#004f95'>Download Our App</Text>
    </Box>

    <Box p='2'>
        <Image width='330px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJM6O9zXklYkSQxeE2SsygpTkkdwOwQcjAGg&usqp=CAU' alt='playstore' />
    </Box>

    <Box p='2'>
        <Image width='250px' src='https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg' alt='appstore' />
    </Box>

    </Flex>
    </Box>
  </>
  )
}

export default Signin
