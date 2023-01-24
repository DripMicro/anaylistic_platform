import { createTsForm } from "@ts-react/form";
import { mapping } from "./mapping";
import React, { Children, FormEvent, ReactNode, useState } from "react";
import { Button, Grid, GridItem, Stack, useToast } from "@chakra-ui/react";
import { castError } from "../../../utils/errors";
import { SystemProps } from "@chakra-ui/system";

interface Props {
  onSubmit: (values: unknown) => Promise<void>;
  children: React.ReactNode;

  templateAreas?: SystemProps["gridTemplateAreas"];
  gridTemplateColumns?: SystemProps["gridTemplateColumns"];
}

const CommonForm = ({
  onSubmit,
  children,
  templateAreas,
  gridTemplateColumns,
}: Props) => {
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

  const arrayChildren = Children.toArray(children);
  const childrenSplitToCells: any[][] = [[]];
  Children.toArray(children).forEach((child: any) => {
    if (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      child.props?.children?.length === 3 &&
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      child.props?.children[0]?.type.name === "GridColumnHeader"
    ) {
      childrenSplitToCells.push([]);
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    childrenSplitToCells[childrenSplitToCells.length - 1].push(child);
  });
  console.log(`muly:CommonForm`, {
    templateAreas,
    arrayChildren,
    childrenSplitToCells,
  });

  return (
    <form
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        void handleSubmit(e);
      }}
      noValidate
    >
      <Stack mx={12}>
        <Grid
          columnGap={16}
          rowGap={8}
          templateAreas={templateAreas || undefined}
          gridTemplateColumns={gridTemplateColumns || undefined}
        >
          {childrenSplitToCells.map((items, idx) => (
            <GridItem key={idx} area={String.fromCharCode(97 + idx)}>
              {items}
            </GridItem>
          ))}
        </Grid>
        <Button
          minW={36}
          type="submit"
          variant="solid"
          isLoading={isLoading}
          alignSelf="start"
        >
          SAVE
        </Button>
      </Stack>
    </form>
  );
};

// don't need this
const propsMap = [["enumValues", "enumValuesXXX"] as const] as const;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const Form = createTsForm(mapping, {
  FormComponent: CommonForm,
  // propsMap,
});
