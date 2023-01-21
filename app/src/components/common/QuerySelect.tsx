import { FormControl, FormLabel, Select as CSelect } from "@chakra-ui/react";
import { useQueryState } from "next-usequerystate";

interface Item {
  id?: string | number;
  title: string;
}

interface Props {
  varName: string;
  emptyTitle?: string;
  label: string;
  choices?: Item[];
}

export const QuerySelect = ({ varName, label, choices, emptyTitle }: Props) => {
  const [value, setValue] = useQueryState(varName);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <CSelect
        placeholder={emptyTitle || "All"}
        value={value || ""}
        onChange={(event) => {
          console.log(`muly:change`, { event: event.target });
          void setValue(event.target.value);
        }}
      >
        {choices?.map(({ id, title }) => (
          <option key={id} value={id}>
            {title}
          </option>
        ))}
      </CSelect>
    </FormControl>
  );
};
