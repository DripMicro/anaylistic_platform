import { QuerySelect } from "../../common/QuerySelect";
import { api } from "../../../utils/api";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import { QueryText } from "../../common/QueryText";
import { CreativeMaterialTable } from "../creative/CreativeMaterialTable";
import { CreativeMaterialRow } from "../creative/CreativeMaterialRow";
import { CreativeMaterialComponent } from "../creative/CreativeMaterialComponent";

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
    <div className="-ml-5 w-full pt-5 pb-4">
      <div className=" mb-5 block text-base font-medium">
        <span className="text-[#2262C6]">Marketing Tools</span> / Sub Creative
        Materials
      </div>
      <div className="flex items-center justify-between">
        <div className=" text-sm font-medium">
          <QuerySelect
            label="Creative Type"
            choices={meta?.type}
            varName="type"
          />
        </div>
        <div className="text-lg font-medium md:mt-3 md:text-sm">
          <QueryText varName="search" label="Search Creative" />
        </div>
      </div>
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
          <CreativeMaterialComponent
            key={item.id}
            values={values}
            file={item.file}
            alt={item.alt}
            url={item.url}
          />
        );
      })}
    </div>
    // <Flex direction="column" gap={2}>

    //   <Flex direction="row" gap={2}>
    // <QuerySelect
    //   label="Creative Type"
    //   choices={meta?.type}
    //   varName="type"
    // />
    // <QueryText varName="search" label="Search Creative" />
    //   </Flex>
    //   <CreativeMaterialTable>
    // {data?.map((item) => {
    //   const values = [
    //     { title: "Creative Name", value: item.title },
    //     { title: "Format", value: item.type },
    //     {
    //       title: "Landing URL",
    //       value: String(item.promotion_id) || "General",
    //     },
    //     { title: "Size (WxH)", value: `${item.width}x${item.height}` },
    //     { title: "Impressions", value: `${String(item.views)}` },
    //     { title: "Clicks", value: `${String(item.clicks)}` },
    //   ];

    //   return (
    //     <CreativeMaterialRow
    //       key={item.id}
    //       values={values}
    //       file={item.file}
    //       alt={item.alt}
    //       url={item.url}
    //     />
    //   );
    // })}
    //   </CreativeMaterialTable>
    // </Flex>
  );
};
