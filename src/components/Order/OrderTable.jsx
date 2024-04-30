import React from "react";
import {
  TableContainer,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
} from "@chakra-ui/react";
import OrderTableRow from "./OrderTableRow";

const OrderTable = ({ orders }) => {
  return (
    <TableContainer
      boxShadow={"0px 2px 10px rgba(0,0,0,0.25)"}
      borderRadius={"12px"}
      mt={6}
      w="full"
      maxH="358px"
      overflowY={"scroll"}
    >
      <Table>
        <Thead bg={"wildSand"}>
          <Tr>
            <Th>S.No.</Th>
            <Th>Order ID</Th>
            <Th>Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders?.map((order, index) => {
            return <OrderTableRow order={order} index={index} key={index} />
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
