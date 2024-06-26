import React from "react";
import {
  Card,
  CardBody,
  Image,
  Text,
  Heading,
  Flex,
  VStack,
} from "@chakra-ui/react";
const Item = ({ figure, desc, img }) => {
  return (
    <Card
      boxShadow={"0px 2px 8px rgba(0, 0, 0, 0.25)"}
      borderRadius={"14px"}
      bg={"#FFF"}
      w={"265px"}
      h={"170px"}
    >
      <CardBody
        display={"flex"}
        flexDir={"row"}
        alignItems={"center"}
        gap={8}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          bg={"rgba(255, 22, 22, 0.15)"}
          w={"85px"}
          h="85px"
          borderRadius={"50%"}
        >
          <Image src={img} w={"50px"} h={"50px"} />
        </Flex>
        <VStack alignItems={"start"}>
          <Heading
            color={"gunPowder"}
            fontSize="40px"
            fontWeight={"700"}
            fontFamily={"Barlow"}
          >
            {figure}
          </Heading>
          <Text
            color={"gunPowder"}
            fontFamily={"Barlow"}
            fontWeight={"400"}
            fontSize={"16px"}
            w={'80px'}
          >
            {desc}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default Item;
