import React from "react";
import { HStack, VStack, Text, Image } from "@chakra-ui/react";

const Product = ({ product }) => {
  return (
    <HStack bg={"catskillWhite"} borderRadius={"20px"} p={4} gap={4} >
      <VStack
        bg={"concrete"}
        borderRadius={"20px"}
        alignItems={"center"}
        justifyContent={"center"}
        border={"1px solid rgba(0,0,0,0.25)"}
      >
        <Image w="127px" h="127px" src={product?.imageUrl} />
      </VStack>
      <VStack alignItems="start" gap={1} >
        <Text fontSize={"12px"} fontWeight={"600"}>
          {product?.name}
        </Text>
        <Text fontSize={"12px"}>{product?.flavour}</Text>
        <Text fontSize={"12px"}>{product?.weight}</Text>
        <HStack justifyContent={'space-between'} w={'180px'} >
          <Text fontSize={"12px"}>{product?.occasion}</Text>
          <Text fontWeight={'600'} color={'scarlet'} >₹ {product?.price}</Text>
        </HStack>
        <HStack justifyContent={'space-between'} w={'180px'} >
          <Text fontSize={"12px"}>{product?.message}</Text>
          <Text fontSize={'10px'} cursor={"pointer"} color={"scarlet"} textDecor={"underline"}>
            Show Rating
          </Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Product;
