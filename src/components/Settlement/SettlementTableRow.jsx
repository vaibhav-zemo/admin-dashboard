import React from "react";
import { Tr, Td, Text, useDisclosure } from "@chakra-ui/react";
import SettlementModal from "./SettlementModal";

const SettlementTableRow = ({ merchant, week, index }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr>
      <Td>{index + 1}</Td>
      <Td>{week?.duration}</Td>
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
      <SettlementModal merchant={merchant} week={week} isOpen={isOpen} onClose={onClose} />
    </Tr>
  );
};

export default SettlementTableRow;
