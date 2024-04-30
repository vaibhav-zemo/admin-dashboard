import React from "react";
import { VStack, Select, Heading } from "@chakra-ui/react";
import SettlementTable from "./SettlementTable";
const Settlements = ({merchant}) => {
  return (
    <VStack w="full" alignItems={"start"} gap={8}>
      <Heading fontWeight={"600"} fontSize={"24px"} fontFamily={"Poppins"}>
        Settlements
      </Heading>
      <VStack alignItems={"start"} gap={4} w="full">
        <Select
          boxShadow={"0px 2px 6px rgba(0,0,0,0.25)"}
          border={"none"}
          w="auto"
          placeholder="2024"
          fontWeight={"medium"}
          fontFamily={"Barlow"}
        >
          <option>2023</option>
          <option>2022</option>
        </Select>
        <SettlementTable merchant={merchant} />
      </VStack>
    </VStack>
  );
};

export default Settlements;
