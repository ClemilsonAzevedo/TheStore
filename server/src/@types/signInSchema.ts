import { z } from "zod";

export const signInSchema = z.object({
	email: z.string().email("Email invalido"),
	password: z.string().min(6, "senha muito curta"),
});

export type SignInProps = z.infer<typeof signInSchema>;
