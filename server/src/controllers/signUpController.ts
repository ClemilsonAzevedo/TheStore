import type { FastifyReply, FastifyRequest } from "fastify";
import type { CreateUserInput } from "../@types/teste";

export function signUpController(
	req: FastifyRequest<{
		Body: CreateUserInput;
	}>,
	res: FastifyReply,
) {
	const { name, password, email } = req.body;

	const response = {
		name,
		password,
		email,
	};
	return res.send(response);
}
