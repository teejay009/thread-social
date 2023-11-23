import { Flex, VStack, Box, Text, Avatar } from "@chakra-ui/react"
import { Avatar } from "@chakra-ui/react"


const UserHeader = () => {
  return ( <VStack gap={4} alignItems={"start"}>
    <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"}
          fontWeight={"bold"}> 
            Aliu Musa </Text>

            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"}>aliumusa@99</Text>
              <Text fontSize={'xs'}
              bg={"gray.dark"}
               color={"gray.light"}
               p={1} borderRadius={"full"}>threads.net</Text>
            </Flex>

        </Box>
        <Box>
          <Avatar
          name="Aliu Musa"
          src="/directorPro.jpeg"
          size={"xl"} />
          
        </Box>
    </Flex>

    <Text>Founder, Executive Chairman and CEO DLT Africa</Text>
    <Flex w={"full"} justifyContent={"space-between"}>
      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"}>3.2k followers</Text>
        <Box w={1} h={1} bg={"gray.light"} borderRadius={50%}></Box>
      </Flex>
    </Flex>
  </VStack>

  )
    
}

export default UserHeader
