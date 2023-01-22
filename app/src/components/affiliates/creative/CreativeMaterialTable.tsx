import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const CreativeMaterialTable = ({ children }: Props) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Tbody>{children}</Tbody>
      </Table>
    </TableContainer>
  );
};
