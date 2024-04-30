import { useState } from "react";
import { Tr, Td, Text, Box, useDisclosure } from "@chakra-ui/react";
import { axiosInstance } from "../../Axios";
import MerchantModal from "./MerchantModal";

const UserTableRow = ({ user, index }) => {
  const [merchant, setMerchant] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchMerchant = async () => {
    try {
      const merchant = await axiosInstance.get("/admin/merchant/" + user.id);
      setMerchant(merchant.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const tdStyle = {
    fontFamily: "Roboto",
    color: "black",
  };

  return (
    <Tr key={user.id}>
      <Td style={tdStyle}>{index + 1}</Td>
      <Td style={tdStyle} display={"flex"} alignItems={"center"}>
        <Text>{user.name}</Text>
        {user?.isAvailable && (
          <Box bgColor={"green"} w={2} h={2} borderRadius={"50%"} ml={1}></Box>
        )}
      </Td>
      <Td style={tdStyle}>{user.phoneNumber}</Td>
      <Td style={tdStyle}>
        <Text
          cursor={"pointer"}
          color={"scarlet"}
          textDecor={"underline"}
          onClick={() => {
            onOpen();
            fetchMerchant();
          }}
        >
          View Details
        </Text>
      </Td>
      <MerchantModal merchant={merchant} isOpen={isOpen} onClose={onClose} />
    </Tr>
  );
};

export default UserTableRow;
