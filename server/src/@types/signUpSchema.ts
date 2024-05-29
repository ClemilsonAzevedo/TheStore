import { z } from "zod";

export const signUpSchema = z.object({
	email: z.string().email("Email invalido"),
	password: z.string().min(6, "senha muito curta"),
	name: z.string(),
});

export const signUpResponse = signUpSchema.omit({ password: true });

export type signUpProps = z.infer<typeof signUpSchema>;
