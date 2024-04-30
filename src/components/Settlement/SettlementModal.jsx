import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import { axiosInstance } from "../../Axios";

const SettlementModal = ({ merchant, week, isOpen, onClose }) => {
  const [transactionId, setTransactionId] = useState("");
  const [amountSettled, setAmountSettled] = useState("");
  const [remarks, setRemarks] = useState("");

  const handleDone = async () => {
    await axiosInstance
      .post("/admin/settlement", {
        weekId: week.id,
        transactionId,
        amount: amountSettled,
        remarks,
        userId: merchant?.userId,
      })
      .then((res) => {
        console.log(res?.data?.message);
        onClose();
      })
      .catch((error) => console.log(error.message));
  };

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
          <VStack gap={16} w="full" alignItems={"start"}>
            <VStack alignItems={"start"} w="40%" >
              <HStack style={hStackStyle}>
                <Text style={textStyle}>Merchant Name:</Text>
                <Text>{merchant?.name}</Text>
              </HStack>
              <HStack style={hStackStyle}>
                <Text style={textStyle}>Cycle:</Text>
                <Text>{week?.duration}</Text>
              </HStack>
              <HStack style={hStackStyle}>
                <Text style={textStyle}>Net Due:</Text>
                <Text>₹ {week?.totalEarning}</Text>
              </HStack>
            </VStack>
            <VStack alignItems={"start"} w="50%">
              <HStack style={hStackStyle}>
                <Text style={textStyle}>Transaction ID:</Text>
                <Input
                  placeholder="Enter Transction ID"
                  type="number"
                  borderRadius={"40px"}
                  bg={"catskillWhite"}
                  color={"poloBlue"}
                  w="255px"
                  onChange={(e) => setTransactionId(e.target.value)}
                />
              </HStack>
              <HStack style={hStackStyle}>
                <Text style={textStyle}>Amount Settled:</Text>
                <Input
                  placeholder="Enter Amount"
                  type="number"
                  borderRadius={"40px"}
                  bg={"catskillWhite"}
                  color={"poloBlue"}
                  w="255px"
                  onChange={(e) => setAmountSettled(e.target.value)}
                />
              </HStack>
              <HStack style={hStackStyle}>
                <Text style={textStyle}>Remarks:</Text>
                <Input
                  placeholder="Enter Remark"
                  type="text"
                  borderRadius={"40px"}
                  bg={"catskillWhite"}
                  color={"poloBlue"}
                  w="255px"
                  onChange={(e) => setRemarks(e.target.value)}
                />
              </HStack>
            </VStack>
            <VStack w="full" mt={20}>
              <Button
                bg={"scarlet"}
                color={"#FFF"}
                borderRadius={"20px"}
                w="113px"
                onClick={handleDone}
              >
                Done
              </Button>
            </VStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SettlementModal;
