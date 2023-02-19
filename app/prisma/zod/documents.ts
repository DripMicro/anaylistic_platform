import * as z from "zod"
import * as imports from "../zod-add-schema"
import { documents_type, documents_doc_status } from "@prisma/client"

export const documentsModel = z.object({
  id: z.bigint(),
  rdate: z.date(),
  name: z.string(),
  path: z.string(),
  affiliate_id: z.number().int(),
  valid: z.number().int(),
  type: z.nativeEnum(documents_type),
  doc_status: z.nativeEnum(documents_doc_status),
  general_text: z.string().nullish(),
  identity_document_text: z.string().nullish(),
  address_verification_text: z.string().nullish(),
  company_verification_text: z.string().nullish(),
  uploaded_by_admin_id: z.number().int(),
})
