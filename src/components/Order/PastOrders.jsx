import React from "react";
import { Select, VStack, Heading } from "@chakra-ui/react";
import OrderTable from "./OrderTable";

const PastOrders = ({ orders }) => {
  return (
    <VStack w="full" alignItems={"start"} gap={8}>
      <Heading fontWeight={"600"} fontSize={"24px"} fontFamily={"Poppins"}>
        Past Orders
      </Heading>
      <VStack alignItems={"start"} gap={0} w="full">
        <Select
          boxShadow={"0px 2px 6px rgba(0,0,0,0.25)"}
          border={"none"}
          w="auto"
          placeholder="Today"
          fontWeight={"medium"}
          fontFamily={"Barlow"}
        >
          <option>Week</option>
          <option>Month</option>
        </Select>
        <OrderTable orders={orders} />
      </VStack>
    </VStack>
  );
};

export default PastOrders;
