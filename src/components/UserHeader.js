import { Flex, VStack, Box, Text } from "@chakra-ui/react"


const UserHeader = () => {
  return <VStack gap={4} alignItems={"start"}>
    <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
            <Text >Aliu Mus </Text>
        </Box>
    </Flex>
  </VStack>
    
      
    
  
}

export default UserHeader
