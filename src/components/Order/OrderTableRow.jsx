import { Tr, Td, Text, useDisclosure } from "@chakra-ui/react";
import OrderModal from "./OrderModal";

const OrderTableRow = ({ order, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr>
      <Td>{index + 1}</Td>
      <Td>{order?.id}</Td>
      <Td>
        <Text
          cursor={"pointer"}
          color={"scarlet"}
          textDecor={"underline"}
          onClick={onOpen}
        >
          View Details
        </Text>
      </Td>
      <OrderModal orderId={order?.id} isOpen={isOpen} onClose={onClose} />
    </Tr>
  );
};

export default OrderTableRow;
