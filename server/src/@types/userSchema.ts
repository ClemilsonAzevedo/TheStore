import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Email invalido"),
  password: z.string().min(6, "senha muito curta"),
});

export const signUpSchema = z.object({
  email: z.string().email("Email invalido"),
  password: z.string().min(6, "senha muito curta"),
  name: z.string(),
});

export const signUpResponse = signUpSchema.omit({ password: true });

export const signInResponse = z.object({
  userData: signUpResponse,
  token: z.string(),
});

export type SignUpProps = z.infer<typeof signUpSchema>;

export type SignInProps = z.infer<typeof signInSchema>;
