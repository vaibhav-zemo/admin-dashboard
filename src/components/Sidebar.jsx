import React from "react";
import { VStack, Image } from "@chakra-ui/react";
import SidebarList from "./SidebarList";
import { GoHome } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoMdList } from "react-icons/io";
import { FaRegChartBar } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { PiUsersThree } from "react-icons/pi";

const Sidebar = () => {
  return (
    <VStack
      zIndex={1}
      w="326px"
      h="100vh"
      bg={"#FFF"}
      alignItems={"left"}
      pt={8}
      px={"28px"}
    >
      <Image src="/images/mainLogo.png" w="111px" h="35px" />
      <VStack alignItems={"left"} mt={16}>
        <SidebarList text="Home" icon={GoHome} path="/" />
        <SidebarList text="Account Approval" icon={LuUser2} path="/account-approval" />
        <SidebarList text="All Customers" icon={HiOutlineUsers} path="/customers" />
        <SidebarList text="All Merchants" icon={PiUsersThree} path="/merchants" />
        <SidebarList text="All Orders" icon={IoMdList} path="/orders" />
        <SidebarList text="Earnings" icon={BsGraphUpArrow} path="/earnings" />
        <SidebarList text="Settlements" icon={FaRegChartBar} path="/settlements" />
      </VStack>
    </VStack>
  );
};

export default Sidebar;
