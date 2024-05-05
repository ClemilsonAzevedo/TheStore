import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const createUserSchema = z.object({
	email: z.string().email("Email invalido"),
	password: z.string().min(6, "senha muito curta"),
	name: z.string(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;

const createUserResponseSchema = z.object({
	email: z.string().email("Email invalido"),
	password: z.string().min(6, "senha muito curta"),
	name: z.string(),
});

export const { schemas: Schemas, $ref } = buildJsonSchemas({
	createUserSchema,
	createUserResponseSchema,
});
