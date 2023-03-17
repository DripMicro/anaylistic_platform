import { api } from "../../../utils/api";
import { Form } from "../../common/forms/Form";
import type { z } from "zod";
import { schema } from "../../../shared-types/forms/register";
import { imUserTypes } from "../../../shared-types/forms/common";

export const FormSignup = () => {
  const { data: languages } = api.misc.getLanguages.useQuery();

  const registerAccount = api.affiliates.registerAccount.useMutation();
  const handleSubmit = async (values: z.infer<typeof schema>) => {
    await registerAccount.mutateAsync(values);
  };

  return (
    <Form
      schema={schema}
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit}
      props={{
        mail: {
          type: "email",
        },
        IMUserType: {
          choices: imUserTypes,
        },
        lang: {
          choices: languages,
        },
      }}
    ></Form>
  );
};
