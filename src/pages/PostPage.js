import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import Comments from "../components/Comments";

const PostPage = () => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex
        w={"full"}
        gap={3}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"}>
          <Avatar src="/aliumusa.jpeg" name="Aliu Musa" size={"md"} mr={2} />
          <Text fontSize={"sm"}>Aliu Musa</Text>
          <Image src="/verified.png" h={4} w={4} ml={2} />
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            textAlign={"right"}
            w={36}
            color={"gray"}
          >
            2day
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Hello gbogbo aye!!!</Text>

      <Box
        overflow={"hidden"}
        borderRadius={6}
        border={"1px solid"}
        borderColor={"gray"}
      >
        <Image src="/post1.png" width={"full"} />
      </Box>
      <Flex>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>
      <Flex gap={2} color={"gray"} fontSize={"sm"} alignItems={"center"}>
        <Text>20 replies</Text>
        <Box w={0.5} h={0.5} bg={"gray"} borderRadius={"full"}></Box>
        <Text>{21 + (liked ? 1 : 0)} likes</Text>
      </Flex>

      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex alignItems={"center"}>
          <Text fontSize={"2x1"}>👍</Text>
          <Text color={"gray"}>Get the App to like, reply and post</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />
      <Comments
      likes={12}
      username={"Ryan Florence"}
      createdAt={"3 mins ago"}
      Comments={"welcome back online darling"} />
      <Comments
      likes={12}
      username={"wasiu ayinde"}
      createdAt={"3 mins ago"}
      Comments={"salam alaykum warahmatulah wabarakatuhu"} />
      <Comments
      likes={12}
      username={"sikiru Alamu"}
      createdAt={"3 mins ago"}
      Comments={"welcome back online darling"} />
      <Comments
      likes={12}
      username={"Mufty Menk"}
      createdAt={"3 mins ago"}
      Comments={"welcome back online darling"} />
    </>
  );
};

export default PostPage;
