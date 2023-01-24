import { createTsForm } from "@ts-react/form";
import { mapping } from "./mapping";
import React, { FormEvent, useState } from "react";
import { Button, Stack, useToast } from "@chakra-ui/react";
import { castError } from "../../../utils/errors";
import { pause } from "../../../utils/pause";

interface Props {
  onSubmit: (values: unknown) => Promise<void>;
  children: React.ReactNode;
}

const CommonForm = ({ onSubmit, children }: Props) => {
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = async (formEvent: FormEvent) => {
    console.log(`muly:handleSubmit`, { props: formEvent });
    setIsLoading(true);
    try {
      // await pause(2000);
      await onSubmit(formEvent);
      toast({
        title: "Saved",
        // description: "We've created your account for you.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (_err) {
      const err = castError(_err);
      console.error(`Error submit form ${err.message}`, { err: err.stack });
      toast({
        title: "Failed to save",
        description: `Error: ${err.message}`,
        status: "error",
        duration: 10000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        void handleSubmit(e);
      }}
      noValidate
    >
      <Stack gap={4} my={8} maxW="md">
        {children}
        <Button type="submit" variant="solid" isLoading={isLoading}>
          SAVE
        </Button>
      </Stack>
    </form>
  );
};

// don't need this
const propsMap = [["enumValues", "enumValuesXXX"] as const] as const;

export const Form = createTsForm(mapping, {
  FormComponent: CommonForm,
  // propsMap,
});
