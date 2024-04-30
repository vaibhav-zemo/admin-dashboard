import React from "react";
import {
  HStack,
  Icon,
  Text,
  Heading,
  Input,
  Image,
  VStack,
} from "@chakra-ui/react";
import { IoIosSearch } from "react-icons/io";
import { useLocation } from "react-router-dom";

const Navbar = ({ heading }) => {
  const pathName = useLocation().pathname;
  return (
    <HStack
      py={4}
      px={8}
      ml={"-1px"}
      w="full"
      boxShadow={"0px 2px 8px rgba(0,0,0,0.25)"}
      bg={"#FFF"}
      justifyContent={"space-between"}
    >
      <VStack alignItems={"start"}>
        <Heading fontFamily={"Poppins"} fontSize={"24px"} fontWeight={"600"}>
          {heading}
        </Heading>
        {pathName === "/" && (
          <Text mt={1} fontWeight={"medium"} fontFamily={"Barlow"}>
            Hi, Samantha. Welcome back to Admin Panel!
          </Text>
        )}
      </VStack>
      <HStack gap={6}>
        {pathName !== "/" && (
          <HStack
            alignItems={"center"}
            pl={6}
            pr={2}
            h={"50px"}
            borderRadius={"40px"}
            bg={"catskillWhite"}
          >
            <Icon color={"silverChalice"} w={5} h={5} as={IoIosSearch} />
            <Input
              fontFamily={"Inter"}
              ml={2}
              p={0}
              borderRadius={0}
              color={"poloBlue"}
              fontSize={"15px"}
              border={"none"}
              placeholder="Search for Customer"
            />
          </HStack>
        )}
        <Image src="/images/avatar.png" borderRadius={"50%"} />
      </HStack>
    </HStack>
  );
};

export default Navbar;
