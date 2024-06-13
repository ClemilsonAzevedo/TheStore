import { buildJsonSchemas } from "fastify-zod";
import { signUpResponse, signUpSchema } from "../@types/signUpSchema";
import { signInSchema } from "../@types/signInSchema";
import { getAllResponse } from "../@types/productsSchema";

export const { schemas: Schemas, $ref } = buildJsonSchemas({
  signUpSchema,
  signUpResponse,
  signInSchema,
  getAllResponse,
});
