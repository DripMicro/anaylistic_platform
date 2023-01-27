import { Box, Button, HStack } from "@chakra-ui/react";
import { DataTable } from "../../common/data-table/DataTable";
import { api } from "../../../utils/api";
import type { AffiliateProfileType } from "../../../server/db-types";
import { createColumnHelper } from "@tanstack/react-table";
import * as z from "zod";
import { Form } from "../../common/forms/Form";
import { ModalFormAction } from "../../common/modal/ModalFormAction";
import { ModalForm } from "../../common/forms/ModalForm";

const columnHelper = createColumnHelper<AffiliateProfileType>();

const schema = z.object({
  name: z.string().describe("Profile Name"),
  url: z.string().url().describe("URL"),
  description: z.string().optional().describe("Description"),
  source_traffic: z.string().optional().describe("Traffic Source"),
  valid: z.number().describe("Available"),
});

type schemaType = z.infer<typeof schema>;

const columns = [
  columnHelper.accessor("id", {
    cell: (info) => info.getValue(),
    header: "#",
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: "Profile Name",
  }),
  columnHelper.accessor("url", {
    cell: (info) => info.getValue(),
    header: "URL",
  }),
  columnHelper.accessor("description", {
    cell: (info) => info.getValue(),
    header: "Description",
    // meta: {
    //   isNumeric: true,
    // },
  }),
  columnHelper.accessor("source_traffic", {
    cell: (info) => info.getValue(),
    header: "Traffic Source",
  }),
  columnHelper.accessor("valid", {
    cell: (info) => info.getValue(),
    header: "Available",
  }),
];

export const Profiles = () => {
  const { data, refetch } = api.affiliates.getProfiles.useQuery();
  const upsertProfile = api.affiliates.upsertProfile.useMutation();

  if (!data) {
    return null;
  }

  const handleSubmit = async (values: schemaType) => {
    console.log(`muly:handleSubmit`, { values });
    await upsertProfile.mutateAsync({
      ...values,
      description: values.description || "",
      source_traffic: values.source_traffic || "",
    });
    await refetch();
  };

  return (
    <Box m={12}>
      <DataTable data={data} columns={columns} />
      <HStack justifyContent="end">
        <ModalFormAction actionName="Add">
          <ModalForm
            schema={schema}
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={handleSubmit}
            formProps={{
              title: "Add profile",
              actionName: "Add",
            }}
          />
        </ModalFormAction>
      </HStack>
    </Box>
  );
};
