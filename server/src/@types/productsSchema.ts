import { z } from "zod";

export const productsSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  description: z.string(),
  amount: z.number().int(),
  price: z.number(),
});

export const getAllResponse = z.array(productsSchema);

export type ProductsProps = z.infer<typeof productsSchema>;
