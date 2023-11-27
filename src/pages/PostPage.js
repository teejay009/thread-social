import { Avatar, Flex, Text, Image, Box} from '@chakra-ui/react'
 import Actions from '../components/Actions'
 import { BsThreeDots } from "react-icons/bs"
 import { useState } from 'react'
import React from 'react'
 
 const PostPage = () => {
    const [liked, setLiked] = useState(false)
   return (
     <>
        <Flex w={"full"} gap={3} justifyContent={"space-between"} alignItems={"center"}>
         
           <Flex alignItems={"center"}>
           <Avatar src="/aliumusa.jpeg" size=
            {"md"}
            />
           <Text fontSize={"sm"}>Aliu musa</Text>
            <Image src="/verified.png" h={4} w={4} ml={2}/>
           </Flex>

           <Flex alignItems={"center"} gap={4}>
           <Text fontSize={{base: "xs", md:"sm"}} textAlign={"right"} w={36} color={"gray"}>2days</Text>
            <BsThreeDots />
           </Flex>
        </Flex>
        <Text my={3}>
            Hello gbogbo aye!!!
        </Text>
     
          <Box
            overflow={"hidden"}
            borderRadius={6}
            border={"1px solid"}
            borderColor={"gray"}
          >
            <Image src="/post1.png" w={"full"}/>
          </Box>
          <Flex>
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>
          <Flex
            gap={2}
            color={"gray"}
            fontSize={"sm"}
            alignItems={"center"}
          >
            <Text>300 Replies</Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"green"}></Box>
            <Text>{21 +(liked ? 1 : 0)} likes</Text>
          </Flex>
        </>

   )
 }
 
 export default PostPage