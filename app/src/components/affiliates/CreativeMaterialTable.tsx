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
import { CreativeMaterialRow } from "./CreativeMaterialRow";

interface Item {
  id: number;
  rdate: Date;
  last_update: Date;
  merchant_id: number;
  product_id: number;
  language_id: number;
  promotion_id: number;
  title: string;
  type: string;
  width: number;
  height: number;
  file: string;
  url: string;
  iframe_url: string;
  alt: string;
  scriptCode: string;
  affiliate_id: number;
  category_id: number;
  featured: number;
  affiliateReady: number;
  isOverrideTrackingLink: boolean;
}

interface Props {
  data: Item[];
}

export const CreativeMaterialTable = ({ data }: Props) => {
  return (
    <TableContainer>
      <Table variant="simple">
        <Tbody>
          {data?.map((item) => (
            <CreativeMaterialRow key={item.id} item={item} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
