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
import { useDebounceCallback } from "@react-hook/debounce";
import { ChangeEvent, ChangeEventHandler, useState } from "react";

interface Props {
  varName: string;
  label: string;
}

export const QueryText = ({ varName, label }: Props) => {
  const [value, setValue] = useQueryState(varName);
  const [localValue, setLocalValue] = useState(String(value || ""));

  const debounceCallback = useDebounceCallback(
    (v: string) => {
      console.log(`muly:debounceCallback ${v}`, { v });
      void setValue(v);
    },
    250,
    false
  );

  return (
    <FormControl maxW="2xs">
      <FormLabel>{label}</FormLabel>
      <Input
        type="search"
        value={localValue}
        onChange={(e) => {
          const v = e.target.value;
          setLocalValue(v);
          debounceCallback(v);
        }}
      />
    </FormControl>
  );
};
