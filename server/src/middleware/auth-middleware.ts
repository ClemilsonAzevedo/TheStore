import type { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import { db } from "../db/db";
import type { LikedProps } from "../@types/productsSchema";

export async function authMiddleware(
	req: FastifyRequest<{ Body: LikedProps }>,
	res: FastifyReply,
) {
	try {
		const { authorization } = req.headers;

		if (authorization) {
			const token = authorization.split(" ")[1];

			const { id } = jwt.verify(
				token,
				process.env.JWT_PASS ?? "",
			) as JwtPayload;

			const user = await db.user.findUnique({
				where: {
					id: id,
				},
			});

			if (user) {
				const { password: _, ...userData } = user;

				req.user = userData;
			} else {
				res.code(401).send({ message: "Faça login para acessar essa rota." });
			}
		} else {
			res.code(401).send({ message: "Faça login para acessar essa rota." });
		}
	} catch (error: unknown) {
		const knowErro = error as Error;
		res.code(500).send({ message: knowErro.message });
	}
}
