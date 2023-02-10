import {
  Stack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { api } from "../../../utils/api";

export const Commissions = () => {
  const { data, refetch } = api.affiliates.getCommissions.useQuery();

  if (!data) {
    return null;
  }

  return (
    <Stack m={12} gap={4}>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Merchant</Th>
              <Th>PNL</Th>
              <Th>Deposit Charge</Th>
              <Th>CPA</Th>
              <Th>DCPA</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item, index) => {
              const pnl = item.deals.find(el => el.dealType === 'pnl') ? item.deals.find(el => el.dealType === 'pnl') : null;
              const cpa = item.deals.find(el => el.dealType === 'cpa') ? item.deals.find(el => el.dealType === 'cpa') : null;
              const dcpa = item.deals.find(el => el.dealType === 'dcpa') ? item.deals.find(el => el.dealType === 'dcpa') : null;
              return (
                <Tr key={index}>
                  <Td>{item.id}</Td>
                  <Td>{item.name}</Td>
                  <Td>{pnl ? pnl.amount + '%' : '-'}</Td>
                  <Td>Passport</Td>
                  <Td>{cpa ? cpa.amount + '%' : '-'}</Td>
                  <Td>{dcpa ? dcpa.amount + '%' : '-'}</Td>
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};
