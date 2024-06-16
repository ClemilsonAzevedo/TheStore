import { buildJsonSchemas } from "fastify-zod";
import {
	signInResponse,
	signInSchema,
	signUpResponse,
	signUpSchema,
} from "../@types/userSchema";
import {
	getAllResponse,
	likedSchema,
	productsSchema,
	putLikedSchema,
} from "../@types/productsSchema";

export const { schemas: Schemas, $ref } = buildJsonSchemas({
	signUpSchema,
	signUpResponse,
	signInSchema,
	signInResponse,
	getAllResponse,
	productsSchema,
	putLikedSchema,
	likedSchema,
});
