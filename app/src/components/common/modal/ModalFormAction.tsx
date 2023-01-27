import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import * as React from "react";
import { AnyZodObject, z, ZodEffects } from "zod";

import { FormLayout } from "../forms/FormLayout";
import { ModalFormActionContext } from "./ModalFormActionContext";
interface Props {
  actionName: string;
  children: React.ReactNode;
}

export const ModalFormAction = ({ actionName, children }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} size="lg">
        {actionName}
      </Button>

      <ModalFormActionContext.Provider value={onClose}>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          {children}
        </Modal>
      </ModalFormActionContext.Provider>
    </>
  );
};
