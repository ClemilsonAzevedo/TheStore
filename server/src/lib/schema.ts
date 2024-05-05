import { buildJsonSchemas } from "fastify-zod";
import { signUpResponseSchema, signUpSchema } from "../@types/signUpSchema";
import { signInSchema } from "../@types/signInSchema";

export const { schemas: Schemas, $ref } = buildJsonSchemas({
	signUpSchema,
	signUpResponseSchema,
	signInSchema,
});
