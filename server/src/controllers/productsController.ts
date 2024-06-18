import type { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../db/db";
import type { LikedProps, ProductsProps } from "../@types/productsSchema";

export class ProductsController {
	async getAll(req: FastifyRequest, res: FastifyReply) {
		const products = await db.products.findMany();

		return res.send(products);
	}

	async getOne(
		req: FastifyRequest<{
			Params: ProductsProps;
		}>,
		res: FastifyReply,
	) {
		const { id } = req.params;

		const product = await db.products.findUnique({
			where: {
				id: id,
			},
		});

		if (!product) {
			return res.code(404).send({ message: "Produto não encontrado." });
		}

		return res.send(product);
	}

	async createLiked(
		req: FastifyRequest<{ Body: LikedProps }>,
		res: FastifyReply,
	) {
		const { id, products_ids } = req.body;

		const updateLiked = await db.like.update({
			where: {
				id: id,
			},
			data: {
				products_ids: products_ids,
			},
		});

		res.send(updateLiked);
	}

	async getLiked(req: FastifyRequest, res: FastifyReply) {
		const userLiked = await db.like.findFirst({
			where: {
				user_id: req.user.id,
			},
		});

		console.log(userLiked);

		const products = await db.products.findMany({
			where: {
				id: {
					in: userLiked?.products_ids,
				},
			},
		});

		res.send(products);
	}
}
