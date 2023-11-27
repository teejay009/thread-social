import { Flex } from "@chakra-ui/react"
import UserHeader from "../components/UserHeader"
import UserPosts from "../components/UserPosts"

const PostPage = () => {
  return (
    <>
    <Flex>
      <Flex w={"full"} gap={3} alignItems={"center"}>
        <Avatar src="/aliumusa.jpeg" name="Aliu Musa" size=
        {"md"} />

        

        <Text fontSize={"sm"}>Aliu Musa</Text>
        <Image src="/verified.png" h={4} w={4} ml={2} />
        <Flex alignItems={"center"}

        <Text fontSize={"sm"}>2days</Text>
        <Image src="/verified.png" h={4} w={4} ml={2} />

      </Flex>

    </Flex>
    </>
   
      
    
  )
}

export default PostPage

