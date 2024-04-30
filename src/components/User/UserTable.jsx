import React from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";
import UserTableRow from "./UserTableRow";

const UserTable = ({ users }) => {
  const thStyle = {
    fontFamily: "Roboto",
    fontWeight: "600",
    color: "black",
    textTransform: "none",
    fontSize: "16px",
  };

  return (
    <TableContainer
      boxShadow={"0px 2px 10px rgba(0,0,0,0.25)"}
      borderRadius={"12px"}
      mt={6}
      w="full"
      h="358px"
      overflowY={"scroll"}
    >
      <Table variant="simple">
        <Thead bg={"wildSand"}>
          <Tr>
            <Th style={thStyle}>S.No</Th>
            <Th style={thStyle}>Name</Th>
            <Th style={thStyle}>Phone no.</Th>
            <Th style={thStyle}>Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users?.map((user, i) => {
            return <UserTableRow key={i} user={user} index={i} />;
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
