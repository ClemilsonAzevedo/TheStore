import type { FastifyReply, FastifyRequest } from "fastify";
import type { SignInProps } from "../@types/signInSchema";
import { db } from "../db/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signInController(
	req: FastifyRequest<{
		Body: SignInProps;
	}>,
	res: FastifyReply,
) {
	const { email, password } = req.body;

	const user = await db.user.findUnique({
		where: {
			email: email,
		},
	});

	if (!user) {
		return res.status(400).send({ message: "Usuario não existe" });
	}

	const verifyPass = bcrypt.compare(password, user.password);

	if (!verifyPass) {
		return res.status(400).send({ message: "Usuario não existe" });
	}

	const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? "", {
		expiresIn: "8h",
	});

	const { password: _, ...userData } = user;

	return res.send({
		userData,
		token: token,
	});
}
