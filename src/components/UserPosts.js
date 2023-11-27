import { Avatar, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function UserPosts() {
  return (
    <link to={"/aliumusa/post/1"}>
        <Flex gap={3} mb={4} py={5}>
            <Flex>
                <Avatar src='/post.png' name='Mark Zukerberg'
                size={"md"}  />
            </Flex>

        </Flex>
      
    </link>
  )
};

export default UserPosts



