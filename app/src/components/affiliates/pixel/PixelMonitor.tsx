import React, { useState } from "react";
import {
  Flex,
  Stack,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Step, Steps, useSteps } from "chakra-ui-steps";
import { DataTable } from "../../common/data-table/DataTable";
import { QuerySelect } from "../../common/QuerySelect";
import { QueryText } from "../../common/QueryText";
import { api } from "../../../utils/api";
import type {
  PixelMonitorType,
  pixel_monitorModelType,
} from "../../../server/db-types";
import { createColumnHelper } from "@tanstack/react-table";
import { useRouter } from "next/router";
import type * as z from "zod";
import type { schema as schemaPixelMonitor } from "../../../shared-types/forms/pixel-monitor";

import { PixelTypeForm } from "./PixelTypeForm";
import { TriggerForm } from "./TriggerForm";
import { PixelCodeForm } from "./PixelCodeForm";
import { MethodForm } from "./MethodForm";
import { FinishForm } from "./FinishForm";

const columnHelper = createColumnHelper<PixelMonitorType>();

type NewRecType = z.infer<typeof schemaPixelMonitor>;
type RecType = pixel_monitorModelType;

export const PixelMonitor = () => {
  const router = useRouter();
  const { pixel_type, merchant, pixel_code, type, method } = router.query;

  const [editRec, setEditRec] = useState<RecType | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });

  const [formState, setFormState] = useState<NewRecType>({
    merchant_id: "",
    type: "",
    pixelCode: "",
    method: "",
  });

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

  if (!data) {
    return null;
  }

  const handleNext = (values: object) => {
    const keys = Object.keys(values);
    keys.map((key) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      setFormState({ ...formState, [key]: (values as any)[key] });
    });
    nextStep();
  };

  const handlePrevious = () => {
    prevStep();
  };

  const handleSubmit = async () => {
    const values = formState;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    values.merchant_id = parseInt(values.merchant_id);

    await upsertPixelMonitor.mutateAsync({
      ...(editRec || {}),
      ...values,
    });
    onClose();
    reset();
    setFormState({
      merchant_id: "",
      type: "",
      pixelCode: "",
      method: "",
    });
    await refetch();
  };

  const steps = [
    {
      id: 1,
      label: "Pixel Type",
      content: (
        <PixelTypeForm
          stepCount={5}
          activeStep={activeStep}
          values={formState}
          merchants={meta?.merchants}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      ),
    },
    {
      id: 2,
      label: "Trigger",
      content: (
        <TriggerForm
          stepCount={5}
          activeStep={activeStep}
          values={formState}
          type={meta?.type}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      ),
    },
    {
      id: 3,
      label: "Pixel Code",
      content: (
        <PixelCodeForm
          stepCount={5}
          activeStep={activeStep}
          values={formState}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      ),
    },
    {
      id: 4,
      label: "Method",
      content: (
        <MethodForm
          stepCount={5}
          activeStep={activeStep}
          values={formState}
          method={meta?.method}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      ),
    },
    {
      id: 5,
      label: "Finish",
      content: (
        <FinishForm onSubmit={handleSubmit} onPrevious={handlePrevious} />
      ),
    },
  ];

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
  ];

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
        <Button
          onClick={onOpen}
          variant="outline"
          colorScheme="blue"
          leftIcon={<AddIcon />}
        >
          New Pixel Monitor
        </Button>
        <Modal isOpen={isOpen} onClose={onClose} size="2xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>New Pixel Monitor</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDir="column" width="100%">
                <Steps activeStep={activeStep} size="sm">
                  {steps.map(({ id, label, content }) => {
                    return (
                      <Step key={id} label={label}>
                        {content}
                      </Step>
                    );
                  })}
                </Steps>
              </Flex>
            </ModalBody>

            {/* <ModalFooter>
              {activeStep === steps.length ? (
                <Flex p={4}>
                  <Button mx="auto" size="sm" onClick={reset}>
                    Reset
                  </Button>
                </Flex>
              ) : (
                <Flex width="100%" justify="flex-end">
                  <Button
                    isDisabled={activeStep === 0}
                    mr={4}
                    onClick={prevStep}
                    size="md"
                    variant="ghost"
                  >
                    Prev
                  </Button>
                  <Button size="md" onClick={nextStep}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Flex>
              )}
            </ModalFooter> */}
          </ModalContent>
        </Modal>
      </HStack>
    </Stack>
  );
};
