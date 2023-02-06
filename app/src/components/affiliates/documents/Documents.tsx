import { Stack, Button, HStack, useToast } from "@chakra-ui/react";
import { DataTable } from "../../common/data-table/DataTable";
import { api } from "../../../utils/api";
import type { AffiliateDocumentType } from "../../../server/db-types";
import { createColumnHelper } from "@tanstack/react-table";
import * as z from "zod";
import { documents_type } from "@prisma/client";
import { ModalForm } from "../../common/forms/ModalForm";
import { AddIcon, CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { format } from "date-fns";
import {
  ModalFormAction,
  ModalFormButton,
} from "../../common/modal/ModalFormButton";
import type { affiliates_ticketsModelType } from "../../../server/db-types";

const columnHelper = createColumnHelper<AffiliateDocumentType>();

const schema = z.object({
  documentType: z.nativeEnum(documents_type).describe("Document Type"),
  documentFile: z.string().describe("Document File"),
});

type NewRecType = z.infer<typeof schema>;

export const Documents = () => {
  const { data, refetch } = api.affiliates.getDocuments.useQuery();
  const upsertTicket = api.affiliates.upsertTicket.useMutation();
  const deleteTicket = api.affiliates.deleteTicket.useMutation();
  const [editRec, setEditRec] = useState<null>(null);
  const toast = useToast();

  if (!data) {
    return null;
  }

  const handleSubmit = async (values: NewRecType) => {
    console.log(values);
    // await upsertTicket.mutateAsync({
    //   ...(editRec || {}),
    //   ...values,
    // });
    // await refetch();
  };

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => Number(info.getValue()),
      header: "#",
    }),
    columnHelper.accessor("name", {
      cell: (info) => {
        const arrFileName = info.getValue().split(".");
        return <a href="#">{arrFileName[0]}</a>;
      },
      header: "Document Name",
    }),
    columnHelper.accessor("type", {
      cell: (info) => {
        const arrDocType = info.getValue().split("_");
        let strDocType = "";
        arrDocType.map((item) => {
          strDocType += item[0]?.toUpperCase() + item.substring(1) + " ";
        });
        return <span>{strDocType}</span>;
      },
      header: "Type",
    }),
    columnHelper.accessor("rdate", {
      cell: (info) => format(new Date(info.getValue()), "MM/dd/yyyy hh:mm:ss"),
      header: "Date Received",
    }),
    columnHelper.accessor("doc_status", {
      cell: (info) => {
        const arrDocStatus = info.getValue().split("_");
        let strDocStatus = "";
        arrDocStatus.map((item) => {
          strDocStatus += item[0]?.toUpperCase() + item.substring(1) + " ";
        });
        return <span>{strDocStatus}</span>;
      },
      header: "Status",
    }),
    columnHelper.accessor("edit-button" as any, {
      cell: (info) => {
        return (
          <Button
            leftIcon={<EditIcon />}
            onClick={() => setEditRec(info.row.original)}
          >
            Edit
          </Button>
        );
      },
      header: "",
    }),
  ];

  const modal = (
    <ModalForm
      schema={schema}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit}
      formProps={{
        title: "Upload new document",
        actionName: "Submit Document",
      }}
      props={{
        documentType: {
          choices: [
            {
              id: "Passport_Driving_Licence",
              title: "Passport/Driving Licence",
            },
            { id: "Address_Verification", title: "Address Verification" },
            { id: "Company_Verification", title: "Company Verification" },
          ],
        },
        documentFile: {
          controlName: "File",
        }
      }}
    />
  );

  return (
    <Stack m={12} gap={4}>
      <DataTable data={data} columns={columns} />
      <HStack justifyContent="end" px={6}>
        <ModalFormButton actionName="Add" icon={<AddIcon />}>
          {modal}
        </ModalFormButton>
      </HStack>
      <ModalFormAction isOpen={!!editRec} onClose={() => setEditRec(null)}>
        {modal}
      </ModalFormAction>
    </Stack>
  );
};
