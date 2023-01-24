import { Box, Heading } from "@chakra-ui/react";

interface Props {
  title?: string;
}

export const GridColumnHeader = ({ title }: Props) => {
  return (
    <Box>
      <Heading as="h3" size="md" my={4}>
        {title}
      </Heading>
    </Box>
  );
};
