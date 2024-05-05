import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const createUserSchema = z.object({
	email: z.string(),
	password: z.string().min(6),
	name: z.string(),
});
export type CreateUserInput = z.infer<typeof createUserSchema>;
const createUserResponseSchema = z.object({
	email: z.string(),
	password: z.string().min(6),
	name: z.string(),
});
export const { schemas: userSchemas, $ref } = buildJsonSchemas({
	createUserSchema,
	createUserResponseSchema,
});
