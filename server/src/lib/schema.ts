import { buildJsonSchemas } from "fastify-zod";
import {
  signInSchema,
  signUpResponse,
  signUpSchema,
} from "../@types/userSchema";
import { getAllResponse, productsSchema } from "../@types/productsSchema";

export const { schemas: Schemas, $ref } = buildJsonSchemas({
  signUpSchema,
  signUpResponse,
  signInSchema,
  getAllResponse,
  productsSchema,
});
