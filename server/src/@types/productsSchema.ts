import { z } from "zod";

export const productsSchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string(),
	image: z.string(),
	createdAt: z.date(),
	price: z.number(),
});

export const likedSchema = z.object({
	id: z.number().int(),
	products_ids: z.array(z.string()),
	user_id: z.string(),
});

export const putLikedSchema = likedSchema.omit({ user_id: true, id: true });

export const getAllResponse = z.array(productsSchema);

export type ProductsProps = z.infer<typeof productsSchema>;

export type LikedProps = z.infer<typeof likedSchema>;
