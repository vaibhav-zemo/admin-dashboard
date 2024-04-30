import { useState, useEffect } from "react";
import { VStack, Select, HStack } from "@chakra-ui/react";
import OrderTable from "../components/Order/OrderTable";
import { axiosInstance } from "../Axios";

const Orders = () => {
  const [city, setCity] = useState("");
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axiosInstance.get("/admin/orders?city=" + city);
      setOrders(res?.data?.list);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchOrders();
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
      <HStack>
        <Select
          boxShadow={"0px 2px 6px rgba(0,0,0,0.25)"}
          border={"none"}
          w="auto"
          placeholder="Today"
          fontWeight={"medium"}
          fontFamily={"Barlow"}
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
        >
          <option value={"Sultanpur"}>Sultanpur</option>
          <option value={"Jhansi"}>Jhansi</option>
        </Select>
      </HStack>
      <OrderTable orders={orders} />
    </VStack>
  );
};

export default Orders;
