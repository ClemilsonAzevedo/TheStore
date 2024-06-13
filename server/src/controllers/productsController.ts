import { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../db/db";
import { ProductsProps } from "../@types/productsSchema";

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
}
