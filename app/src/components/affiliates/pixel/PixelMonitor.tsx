import React, { useState } from "react";
import { Flex, Stack, HStack, Button, useToast } from "@chakra-ui/react";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { DataTable } from "../../common/data-table/DataTable";
import { QuerySelect } from "../../common/QuerySelect";
import { QueryText } from "../../common/QueryText";
import { api } from "../../../utils/api";
import type { pixel_monitorModelType } from "../../../server/db-types";
import type { PixelMonitorType } from "../../../server/db-types";
import { createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import * as z from "zod";
import { ModalForm } from "../../common/forms/ModalForm";
import {
  ModalFormAction,
  ModalFormButton,
} from "../../common/modal/ModalFormButton";
import { pixel_monitorModel } from "../../../../prisma/zod";

const columnHelper = createColumnHelper<PixelMonitorType>();

const schema = z.object({
  merchant_id: z.number().describe("Merchant // Select Merchant"),
  type: pixel_monitorModel.shape.type.describe("Trigger // Select Trigger"),
  pixelCode: z.string().describe("Pixel Code"),
  method: pixel_monitorModel.shape.method.describe("Method // Select Method"),
});

type NewRecType = z.infer<typeof schema>;
type RecType = pixel_monitorModelType;

export const PixelMonitor = () => {
  const router = useRouter();
  const { pixel_type, merchant, pixel_code, type, method } = router.query;

  const [editRec, setEditRec] = useState<RecType | null>(null);
  const toast = useToast();

  const { data: meta } = api.affiliates.getPixelMonitorMeta.useQuery();

  const { data, refetch } = api.affiliates.getPixelMonitor.useQuery(
    {
      pixel_type: pixel_type ? String(pixel_type) : undefined,
      merchant: merchant ? Number(merchant) : undefined,
      pixel_code: pixel_code ? String(pixel_code) : undefined,
      type: type ? String(type) : undefined,
      method: method ? String(method) : undefined,
    },
    { keepPreviousData: true }
  );
  const upsertPixelMonitor = api.affiliates.upsertPixelMonitor.useMutation();
  const deletePixelMonitor = api.affiliates.deletePixelMonitor.useMutation();

  if (!data) {
    return null;
  }

  const handleSubmit = async (values: NewRecType) => {
    values.merchant_id = values.merchant_id;
    await upsertPixelMonitor.mutateAsync({
      ...(editRec || {}),
      ...values,
    });
    await refetch();
  };

  const handleDelete = () => {
    if (editRec?.id) {
      deletePixelMonitor.mutate(
        { id: editRec.id },
        {
          onSuccess: () => {
            setEditRec(null);
            toast({
              title: "Pixel Monitor deleted",
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            void refetch();
          },
          onError: (error) => {
            toast({
              title: "Failed to delete pixel monitor",
              description: `Error: ${error.message}`,
              status: "error",
              duration: 10000,
              isClosable: true,
            });
          },
        }
      );
    }
  };

  const columns = [
    columnHelper.accessor("id", {
      cell: (info) => info.getValue(),
      header: "#",
    }),
    columnHelper.accessor("merchant.name", {
      cell: (info) => info.getValue(),
      header: "Merchant",
    }),
    columnHelper.accessor("pixelCode", {
      cell: (info) => info.getValue(),
      header: "Pixel Code",
    }),
    columnHelper.accessor("type", {
      cell: (info) => info.getValue().toUpperCase(),
      header: "Type",
    }),
    columnHelper.accessor("method", {
      cell: (info) => info.getValue().toUpperCase(),
      header: "Method",
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
      header: "Action",
    }),
  ];

  const modal = (
    <ModalForm
      schema={schema}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit}
      formProps={
        editRec
          ? {
              title: "Edit Pixel Monitor",
              actionName: "Save",
              actions: (
                <Button
                  onClick={handleDelete}
                  variant="outline"
                  colorScheme="red"
                  leftIcon={<DeleteIcon />}
                  isLoading={deletePixelMonitor.isLoading}
                >
                  Delete
                </Button>
              ),
            }
          : {
              title: "New Pixel Monitor",
              actionName: "Add",
            }
      }
      defaultValues={editRec ? editRec : undefined}
      props={{
        merchant_id: {
          choices: [{ id: 1, title: "CKCasino" }],
        },
        type: {
          choices: meta?.type,
        },
        pixelCode: {
          controlName: "Textarea",
        },
        method: {
          choices: meta?.method,
        },
      }}
    />
  );

  return (
    <Stack m={12} gap={2}>
      <Flex direction="row" gap={2}>
        <QuerySelect
          label="Pixel Type"
          choices={meta?.pixel_type}
          varName="pixel_type"
        />
        <QuerySelect
          label="Merchant"
          choices={meta?.merchants}
          varName="merchant"
        />
        <QueryText varName="pixel_code" label="Pixel Code" />
        <QuerySelect label="Type" choices={meta?.type} varName="type" />
        <QuerySelect label="Method" choices={meta?.method} varName="method" />
      </Flex>
      <DataTable data={data} columns={columns} />
      <HStack justifyContent="end">
        <ModalFormButton actionName="New Pixel Monitor" icon={<AddIcon />}>
          {modal}
        </ModalFormButton>
      </HStack>
      <ModalFormAction isOpen={!!editRec} onClose={() => setEditRec(null)}>
        {modal}
      </ModalFormAction>
    </Stack>
  );
};
