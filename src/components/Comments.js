import { Avatar, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

const Comments = ({ Comments, createdAt, likes, username, userAvatar }) => {
  const [liked, setLiked] = useState(false);

  return (
    <Flex gap={4} my={2} py={2} w={"full"}>
      <Avatar
        src={"userAvatar"}
        size={"sm"}
        name="Ryan Florence"
      />
      <Flex flexDir={"column"} gap={1} w={"full"}>
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {username}
          </Text>

          <Flex gap={2} alignItems={"center"}>
            <Text fontSize={"sm"} color={"gray"}>
              {createdAt}
            </Text>
            <BsThreeDots />
          </Flex>
        </Flex>
        <Text>AT the attainment of independent in 1960</Text>
        <Text>AT the attainment of independent in 1960</Text>
        <Actions liked={liked} setLiked={setLiked} />

        <Text>{12 + (liked ? 1 : 0)} likes </Text>
      </Flex>
    </Flex>
  );
};

export default Comments;
