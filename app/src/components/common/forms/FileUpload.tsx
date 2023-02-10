import { ReactNode, useState, useRef } from "react";
import { InputGroup, InputLeftElement, Input, Icon } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useForm, UseFormRegisterReturn } from "react-hook-form";

type FileUploadProps = {
  name?: string;
  accept?: string;
  multiple?: boolean;
};

export const FileUpload = (props: FileUploadProps) => {
  const { name, accept, multiple } = props;
  const [fileName, setFileName] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => inputRef.current?.click();
  const handleChange = () => {
    setFileName(inputRef.current?.files[0]?.name);
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<Icon as={AddIcon} />} />
      <input
        type={"file"}
        name={name}
        multiple={multiple || false}
        hidden
        accept={accept}
        ref={inputRef}
        onChange={handleChange}
      />
      <Input
        placeholder="Your File..."
        readOnly
        value={fileName}
        onClick={handleClick}
      />
    </InputGroup>
  );
};
