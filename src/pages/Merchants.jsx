import { useState, useEffect } from "react";
import { VStack, Select } from "@chakra-ui/react";
import UserTable from "../components/User/UserTable";
import { axiosInstance } from "../Axios";

const Merchants = () => {
  const [merchants, setMerchants] = useState([]);
  const [city, setCity] = useState("");

  const fetchMerchants = async () => {
    try {
      const merchants = await axiosInstance.get(
        "/admin/merchants?city=" + city
      );
      setMerchants(merchants.data.list);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMerchants();
  }, [city]);

  return (
    <VStack
      bg={"#FFF"}
      h="full"
      m={10}
      borderRadius={"20px"}
      alignItems={"start"}
      p={10}
      w="1038px"
    >
      <Select
        boxShadow={"0px 2px 6px rgba(0,0,0,0.25)"}
        border={"none"}
        w="auto"
        placeholder="City"
        fontWeight={"medium"}
        fontFamily={"Barlow"}
        onChange={(e) => setCity(e.target.value)}
      >
        <option value={"Sultanpur"}>Sultanpur</option>
        <option value={"Jhansi"}>Jhansi</option>
      </Select>
      <UserTable users={merchants} />
    </VStack>
  );
};

export default Merchants;
