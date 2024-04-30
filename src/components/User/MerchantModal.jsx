import React from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import PastOrders from "../Order/PastOrders";
import { Link } from "react-router-dom";
import Settlements from "../Settlement/Settlements";
import { useLocation } from "react-router-dom";

const MerchantModal = ({ merchant, isOpen, onClose }) => {
  const pathName = useLocation().pathname;
  const textStyle = {
    fontSize: "18px",
    fontFamily: "Poppins",
    fontWeight: "600",
  };
  const hStackStyle = {
    width: "100%",
    justifyContent: "space-between",
  };
  return (
    <Modal size={""} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width={"1000px"} borderRadius={"20px"}>
        <ModalCloseButton />
        <ModalBody p={10} w="full">
          <VStack gap={16} w="full">
            <HStack
              alignItems={"start"}
              w="full"
              gap={10}
            >
              <VStack alignItems={"start"} w={'60%'} borderRight={'1px solid #E9E9E9'} pr={10}>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>Phone Number:</Text>
                  <Text>{merchant?.phoneNumber}</Text>
                </HStack>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>Name:</Text>
                  <Text>{merchant?.name}</Text>
                </HStack>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>Email ID:</Text>
                  <Text>{merchant?.email}</Text>
                </HStack>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>State & City:</Text>
                  <Text>
                    {merchant?.state}, {merchant?.city}
                  </Text>
                </HStack>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>Pin Codes:</Text>
                  <Text>
                    {merchant?.pinCode?.map((pinCode) => {
                      return pinCode + " ";
                    })}
                  </Text>
                </HStack>
              </VStack>
              <VStack w={'30%'}>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>FSSAI License:</Text>
                  <Link to={merchant?.license}>
                    <Text
                      cursor={"pointer"}
                      color={"scarlet"}
                      textDecor={"underline"}
                    >
                      Click Here
                    </Text>
                  </Link>
                </HStack>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>UPI ID:</Text>
                  <Text>{merchant?.upiId}</Text>
                </HStack>
              </VStack>
            </HStack>
            {pathName === "/merchants" ? (
              <PastOrders orders={merchant?.orders?.list} />
            ) : (
              <Settlements merchant={merchant} />
            )}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MerchantModal;
