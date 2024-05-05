import type { FastifyReply, FastifyRequest } from "fastify";
import type { CreateUserInput } from "../@types/signUpSchema";
import { db } from "../db/db";
import bcrypt from "bcrypt";

export async function signUpController(
	req: FastifyRequest<{
		Body: CreateUserInput;
	}>,
	res: FastifyReply,
) {
	const { name, password, email } = req.body;

	const user = await db.user.findUnique({
		where: {
			email: email,
		},
	});

	if (user) {
		return res.status(400).send({ message: "Email já existente" });
	}

	const hashPassword = await bcrypt.hash(password, 10);

	const createUser = await db.user.create({
		data: {
			email: email,
			name: name,
			password: hashPassword,
		},
	});

	const { password: _, ...userData } = createUser;

	return res.status(201).send(userData);
}
