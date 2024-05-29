import { buildJsonSchemas } from "fastify-zod";
import { signUpResponse, signUpSchema } from "../@types/signUpSchema";
import { signInSchema } from "../@types/signInSchema";

export const { schemas: Schemas, $ref } = buildJsonSchemas({
	signUpSchema,
	signUpResponse,
	signInSchema,
});
