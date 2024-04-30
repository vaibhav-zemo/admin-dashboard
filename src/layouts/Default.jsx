import React from "react";
import { Outlet } from "react-router-dom";
import { HStack, VStack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import navHeading from "../constants/navHeading";
import { useLocation } from "react-router-dom";

const Default = () => {
  const pathName = useLocation().pathname;
  return (
    <HStack w='100vw' gap={0} bg={'wildSand'} h='100vh' alignItems={'start'} >
      <Sidebar />
      <VStack w='full' alignItems={'start'} h='full' >
        <Navbar heading={navHeading[pathName]} />
        <Outlet />
      </VStack>
    </HStack>
  );
};

export default Default;
