import { useToast } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { castError } from "../../../utils/errors";
import type { CommonFormProps } from "./Form";
import { useFormContext } from "react-hook-form";
import type { FieldValues } from "react-hook-form";

export const useSubmitAction = ({
  onSubmit,
}: Pick<CommonFormProps, "onSubmit">) => {
  const { handleSubmit } = useFormContext();
  const toast = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const save = async (fieldValues: FieldValues) => {
    console.log(`muly:handleSubmit`, { fieldValues });
    setIsLoading(true);
    try {
      // await pause(2000);
      await onSubmit(fieldValues);
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

  return {
    handleSubmit: handleSubmit(save),
    isLoading,
  };
};
