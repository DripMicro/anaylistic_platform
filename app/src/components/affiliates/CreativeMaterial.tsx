import { QuerySelect } from "../common/QuerySelect";
import { api } from "../../utils/api";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import { CreativeMaterialTable } from "./CreativeMaterialTable";
import { QueryText } from "../common/QueryText";

export const CreativeMaterial = () => {
  const router = useRouter();
  const { type, category, language, size, promotion, search } = router.query;

  // console.log(`muly:query`, { type, category, language, size, promotion });

  const { data: meta } = api.affiliates.getMerchantCreativeMeta.useQuery();
  const { data } = api.affiliates.getMerchantCreative.useQuery(
    {
      type: type ? String(type) : undefined,
      category: category ? Number(category) : undefined,
      language: language ? Number(language) : undefined,
      size: size ? String(size) : undefined,
      promotion: promotion ? Number(promotion) : undefined,
      search: search ? String(search) : undefined,
    },
    { keepPreviousData: true }
  );
  // console.log(`muly:meta`, { meta });

  return (
    <Flex direction="column" gap={2}>
      <Flex direction="row" gap={2}>
        <QuerySelect
          label="Creative Type"
          choices={meta?.type}
          varName="type"
        />
        <QuerySelect
          label="Category"
          choices={meta?.merchants_creative_categories}
          varName="category"
        />
        <QuerySelect
          label="Language"
          choices={meta?.language}
          varName="language"
        />
        <QuerySelect label="Size" choices={meta?.size} varName="size" />
        <QuerySelect
          label="Promotion"
          choices={meta?.merchants_promotions}
          emptyTitle="General"
          varName="promotion"
        />
        <QueryText varName="search" label="Search Creative" />
      </Flex>
      {data && <CreativeMaterialTable data={data} />}
    </Flex>
  );
};
