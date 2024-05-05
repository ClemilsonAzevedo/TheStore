import type { FastifyReply, FastifyRequest } from "fastify";
import type { SignInProps } from "../@types/signInSchema";

export async function signInController(
	req: FastifyRequest<{
		Body: SignInProps;
	}>,
	res: FastifyReply,
) {
	const {} = req.body;
}
