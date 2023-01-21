import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Image,
  Text,
  Grid,
  HStack,
  Tr,
  Td,
} from "@chakra-ui/react";
import { serverStoragePath } from "../utils";

interface Props {
  item: {
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
  };
}

export const CreativeMaterialRow = ({ item }: Props) => {
  const values = [
    // { title: "Id", value: item.id },
    { title: "Creative Name", value: item.title },
    { title: "Type", value: item.type },
    { title: "Promotion", value: item.promotion_id },
    { title: "Category", value: item.category_id },
    { title: "Size (WxH)", value: `${item.width}x${item.height}` },
    { title: "Language", value: item.language_id },
  ];

  return (
    <Tr p={4} gap={4}>
      <Td>
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "173px" }}
          src={serverStoragePath(item.file)}
          alt={item.alt}
        />
      </Td>

      <Td>
        <Grid templateColumns="max-content 1fr" gap={1} flexGrow={1}>
          {values
            .map(({ title, value }) => [
              <Text key={title}>{title}</Text>,
              <Text key={title + "_v"}>{value}</Text>,
            ])
            .flat()}
        </Grid>
      </Td>

      <Td>
        <Stack>
          <Text>{item.url}</Text>
          <HStack>
            <Button>Copy Click URL</Button>
            <Button>Get HTML Code</Button>
          </HStack>
        </Stack>
      </Td>
    </Tr>
  );
};
