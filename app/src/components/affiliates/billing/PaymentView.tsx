import { Stack, Button, HStack, useToast, Flex } from "@chakra-ui/react";
import { DataTable } from "../../common/data-table/DataTable";
import { api } from "../../../utils/api";
import type { PaymentsPaidType } from "../../../server/db-types";
import { createColumnHelper } from "@tanstack/react-table";
import { AddIcon, CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { QueryText } from "../../common/QueryText";

interface Props {
  id: string;
}

export const PaymentView = ({ id }: Props) => {
  const { data } = api.affiliates.getPaymentDetails.useQuery({ paymentId: id });

  return (
    <Stack m={12} gap={2}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Stack>
  );
};
