import { useState, useEffect } from "react";
import {
  HStack,
  VStack,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Heading,
} from "@chakra-ui/react";
import Product from "./Product";
import { axiosInstance } from "../../Axios";

const OrderModal = ({ orderId, isOpen, onClose }) => {
  const [order, setOrder] = useState({});

  const fetchOrder = async () => {
    try {
      const order = await axiosInstance.get("admin/order/" + orderId);
      setOrder(order.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const textStyle = {
    fontSize: "18px",
    fontFamily: "Poppins",
    fontWeight: "600",
  };
  const hStackStyle = {
    width: '100%',
    justifyContent: "space-between",
  };

  return (
    <Modal size={""} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent width={"1000px"} borderRadius={"20px"}>
        <ModalCloseButton />
        <ModalBody p={10} w="full">
          <VStack gap={16} w="full" alignItems={"start"}>
            <HStack
              alignItems={"start"}
              w="full"
              gap={10}
            >
              <VStack alignItems={"start"} w={'60%'} borderRight={'1px solid #E9E9E9'} pr={10}>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>Order ID:</Text>
                  <Text>{order?.id}</Text>
                </HStack>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>Date & Time:</Text>
                  <Text>{order?.createdAt}</Text>
                </HStack>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>Customer Name:</Text>
                  <Text>{order?.orderBy}</Text>
                </HStack>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>Phone Number:</Text>
                  <Text>{order?.phoneNumber}</Text>
                </HStack>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>Address:</Text>
                  <Text>{order?.address}</Text>
                </HStack>
              </VStack>
              <VStack alignItems={"start"} w={'30%'}>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>Message:</Text>
                  <Text>{order?.note}</Text>
                </HStack>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>Baker Name:</Text>
                  <Text>{order?.acceptedBy?.name}</Text>
                </HStack>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>Baker Contact:</Text>
                  <Text>{order?.acceptedBy?.phoneNumber}</Text>
                </HStack>
                <HStack style={hStackStyle}>
                  <Text style={textStyle}>Status:</Text>
                  <Text>{order?.status}</Text>
                </HStack>
              </VStack>
            </HStack>
            <VStack alignItems={"start"} gap={6}>
              <Heading fontSize="24px" fontWeight={"600"}>
                Product Details
              </Heading>
              <HStack gap={4}>
                {order?.items?.map((product) => {
                  return <Product key={product?.id} product={product} />;
                })}
              </HStack>
            </VStack>
            <VStack alignItems={"start"} gap={4} w='full'>
              <Heading fontSize="24px" fontWeight={"600"}>
                Price Summary
              </Heading>
              <HStack gap={10} w='full' alignItems={'start'} >
                <VStack alignItems={"start"} w={'30%'} borderRight={'1px solid #E9E9E9'} pr={10}>
                  <HStack style={hStackStyle}>
                    <Text>Item Subtotal:</Text>
                    <Text>₹ {order?.itemSubtotal}</Text>
                  </HStack>
                  <HStack style={hStackStyle}>
                    <Text>Discount:</Text>
                    <Text>₹ {order?.discountedAmount}</Text>
                  </HStack>
                  <HStack style={hStackStyle}>
                    <Text>Grand Total:</Text>
                    <Text>₹ {order?.totalAmount}</Text>
                  </HStack>
                </VStack>
                <VStack alignItems={"start"}>
                  <HStack style={hStackStyle}>
                    <Text>Merchant Subtotal:</Text>
                    <Text>₹ {order?.merchantSubtotal}</Text>
                  </HStack>
                  <HStack style={hStackStyle}>
                    <Text>Merchant Delivery:</Text>
                    <Text>₹ 15</Text>
                  </HStack>
                  <HStack style={hStackStyle}>
                    <Text>Merchant Total:</Text>
                    <Text>₹ {order?.totalShopAmount}</Text>
                  </HStack>
                </VStack>
              </HStack>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
