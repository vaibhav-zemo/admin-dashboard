import React from "react";
import {
  TableContainer,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
} from "@chakra-ui/react";
import SettlementTableRow from "./SettlementTableRow";

const SettlementTable = ({ merchant }) => {
  return (
    <TableContainer
      boxShadow={"0px 2px 10px rgba(0,0,0,0.25)"}
      borderRadius={"12px"}
      w="full"
    >
      <Table>
        <Thead bg={"wildSand"}>
          <Tr>
            <Th>S.No.</Th>
            <Th>Cycle</Th>
            <Th>Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {merchant?.pastWeeksEarnings?.list?.map((week, index) => {
            return <SettlementTableRow merchant={merchant} week={week} index={index} key={index} />
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SettlementTable;
