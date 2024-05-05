import { buildJsonSchemas } from "fastify-zod";
import { signUpSchema } from "../@types/signUpSchema";
import { signInSchema } from "../@types/signInSchema";

export const { schemas: Schemas, $ref } = buildJsonSchemas({
	signUpSchema,
	signInSchema,
});
