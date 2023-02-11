import { Flex } from "@chakra-ui/react";
import { api } from "../../../utils/api";
import { Form } from "../../common/forms/Form";
import { z } from "zod";
const Schema = z.object({
  username: z.string().optional().describe("User Name"),
  first_name: z.string().optional().describe("First Name"),
  last_name: z.string().optional().describe("Last Name"),
  mail: z.string().email().optional().describe("Email"),
  password: z.string().optional().describe("Password"),
  phone: z.string().optional().describe("Phone Number"),
  IMUserType: z
    .string()
    .optional()
    .describe("Instant Message Type // Choose IM Type"),
    IMUser: z.string().optional().describe("IM Account"),
    lang: z.string().optional().describe("Language"),
    company: z.string().optional().describe("Company"),
    website: z.string().optional().describe("Website"),
  });

export const FormSignup = () => {
  const createaccount = api.affiliates.createaccount.useMutation();
  const handleSubmit = async (values: z.infer<typeof Schema>) => {
    await createaccount.mutateAsync(values);
  };
  const imUserTypes = [
    "Skype",
    "MSN",
    "Google Talk",
    "QQ",
    "ICQ",
    "Yahoo",
    "AIM",
  ];
   const language = [
    "English",
    "Hindi",
    "Arabic",
    "Turkish",
  ];
  
  return (
    
    <Form
      schema={Schema}
      onSubmit={handleSubmit}
      props={{
        mail: {
          type: "email",
        },
        IMUserType: {
          choices: imUserTypes,
        },
        lang: {
          choices: language,
        }
      }}
    ></Form>
 
  );
};
