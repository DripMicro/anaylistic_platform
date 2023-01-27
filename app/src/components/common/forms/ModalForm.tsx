import { createTsForm } from "../../libs/react-ts-form";
import { mapping } from "./mapping";
import type { FormEvent } from "react";
import React, { useContext } from "react";
import {
  Button,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Stack,
} from "@chakra-ui/react";
import type { GridProps } from "@chakra-ui/layout/dist/grid";
import { FormLayout } from "./FormLayout";
import { useSubmitAction } from "./useSubmitAction";
import { ModalFormActionContext } from "../modal/ModalFormActionContext";

interface CommonFormProps {
  // onClose: () => void;
  actionName: string;
  title: string;
  onSubmit: (values: unknown) => Promise<void>;
  children: React.ReactNode;

  grid?: GridProps;
}

const CommonForm = ({
  actionName,
  title,
  onSubmit,
  children,
  grid,
}: CommonFormProps) => {
  const onClose = useContext(ModalFormActionContext);
  const { handleSubmit, isLoading } = useSubmitAction({
    onSubmit: async (values: unknown) => {
      await onSubmit(values);
      onClose();
    },
  });

  return (
    <form
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        void handleSubmit(e);
      }}
      noValidate
    >
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormLayout grid={grid}>{children}</FormLayout>
        </ModalBody>

        <ModalFooter>
          {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
          <Button type="submit" colorScheme="blue" mr={3} isLoading={isLoading}>
            {actionName}
          </Button>
          {/*<Button variant="ghost">Secondary Action</Button>*/}
        </ModalFooter>
      </ModalContent>
    </form>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const ModalForm = createTsForm(mapping, {
  FormComponent: CommonForm,
});
