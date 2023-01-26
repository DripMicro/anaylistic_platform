import { QuerySelect } from "../../common/QuerySelect";
import { api } from "../../../utils/api";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import { QueryText } from "../../common/QueryText";
import { CreativeMaterialTable } from "../creative/CreativeMaterialTable";
import { CreativeMaterialRow } from "../creative/CreativeMaterialRow";

export const SubCreativeMaterial = () => {
  const router = useRouter();
  const { type, search } = router.query;

  const { data: meta } = api.affiliates.getMerchantSubCreativeMeta.useQuery();

  const { data } = api.affiliates.getMerchantSubCreative.useQuery(
    {
      type: type ? String(type) : undefined,
      search: search ? String(search) : undefined,
    },
    { keepPreviousData: true }
  );

  return (
    <Flex direction="column" gap={2}>
      <Flex direction="row" gap={2}>
        <QuerySelect
          label="Creative Type"
          choices={meta?.type}
          varName="type"
        />
        <QueryText varName="search" label="Search Creative" />
      </Flex>
      <CreativeMaterialTable>
        {data?.map((item) => {
          const values = [
            { title: "Creative Name", value: item.title },
            { title: "Format", value: item.type },
            {
              title: "Landing URL",
              value: String(item.promotion_id) || "General",
            },
            { title: "Size (WxH)", value: `${item.width}x${item.height}` },
            { title: "Impressions", value: `${String(item.views)}` },
            { title: "Clicks", value: `${String(item.clicks)}` },
          ];

          return (
            <CreativeMaterialRow
              key={item.id}
              values={values}
              file={item.file}
              alt={item.alt}
              url={item.url}
            />
          );
        })}
      </CreativeMaterialTable>
    </Flex>
  );
};
