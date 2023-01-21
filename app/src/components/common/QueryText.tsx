import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightAddon,
  Select as CSelect,
} from "@chakra-ui/react";
import { SelectBox, SelectBoxItem } from "@tremor/react";
import { useQueryState } from "next-usequerystate";
import { SearchIcon } from "@chakra-ui/icons";

interface Props {
  varName: string;
  label: string;
}

export const QueryText = ({ varName, label }: Props) => {
  const [value, setValue] = useQueryState(varName);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input
        type="search"
        value={String(value || "")}
        onChange={(e) => {
          void setValue(e.target.value);
        }}
      />
    </FormControl>
  );
};
