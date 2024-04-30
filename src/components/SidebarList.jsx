import React from "react";
import { HStack, Text, Icon, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const SidebarList = ({ text, icon, path }) => {
  const currentPath = useLocation().pathname;

  return (
    <Link to={path}>
      <HStack
        alignItems={"center"}
        justifyContent={"space-between"}
        color={"baliHai"}
        bg={path === currentPath && "pippin"}
        py={2}
        px={2.5}
        borderRadius={"8px"}
      >
        <HStack>
          <Flex
            w={6}
            h={6}
            border={"1px solid"}
            borderColor={path === currentPath ? 'scarlet' : '#9197B3'}
            borderRadius={"5px"}
            justifyContent={"center"}
            alignItems={"center"}
            color={path === currentPath ? "scarlet" : "baliHai"}
          >
            <Icon as={icon} />
          </Flex>
          <Text
            fontWeight={"500"}
            mx={2}
            fontSize={"14px"}
            fontFamily={"Poppins"}
            color={path === currentPath ? "scarlet" : "baliHai"}
          >
            {text}
          </Text>
        </HStack>
        {path !== "/" && <Icon w={4} h={4} as={FaAngleRight} />}
      </HStack>
    </Link>
  );
};

export default SidebarList;
