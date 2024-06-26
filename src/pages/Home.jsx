import React, { useState } from "react";
import { VStack, HStack, Stack, Select, Flex } from "@chakra-ui/react";
import Card from "../components/Home/Card";

const Home = () => {
  const [city, setCity] = useState("");
  return (
    <VStack p={10} w="80%" alignItems={"start"} gap={8}>
      <HStack>
        <Select
          boxShadow={"0px 2px 6px rgba(0,0,0,0.25)"}
          border={"none"}
          w="auto"
          placeholder="Today"
          fontWeight={"medium"}
          fontFamily={"Barlow"}
          bg={"#FFF"}
        >
          <option value={"week"}>Week</option>
          <option value={"month"}>Month</option>
        </Select>
        <Select
          boxShadow={"0px 2px 6px rgba(0,0,0,0.25)"}
          border={"none"}
          w="auto"
          placeholder="City"
          fontWeight={"medium"}
          fontFamily={"Barlow"}
          onChange={(e) => setCity(e.target.value)}
          bg={"#FFF"}
        >
          <option value={"Sultanpur"}>Sultanpur</option>
          <option value={"Jhansi"}>Jhansi</option>
        </Select>
      </HStack>
      <Flex w="full" flexWrap={"wrap"} gap={10}>
        <Card
          img={"./images/home-customer.svg"}
          figure={75}
          desc={"Customers Onboard"}
        />
        <Card
          img={"./images/home-file.svg"}
          figure={75}
          desc={"Merchants Onboard"}
        />
        <Card
          img={"./images/home-shopping-bag.svg"}
          figure={75}
          desc={"Orders Placed"}
        />
        <Card img={"./images/home-bill.svg"} figure={75} desc={"Net Revenue"} />
        <Card img={"./images/home-bill.svg"} figure={75} desc={"Net Profit"} />
        <Card
          img={"./images/home-price-tag.svg"}
          figure={75}
          desc={"Net Settlement"}
        />
      </Flex>
    </VStack>
  );
};

export default Home;
