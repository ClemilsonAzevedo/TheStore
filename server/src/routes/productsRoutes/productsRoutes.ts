import { ProductsController } from "../../controllers/productsController";
import { $ref } from "../../lib/schema";
import { authMiddleware } from "../../middleware/auth-middleware";
import { app } from "../../server";

export async function productsRoutes() {
	app.get(
		"/products",
		{
			schema: {
				tags: ["Products"],
				response: {
					200: $ref("getAllResponse"),
				},
			},
		},
		new ProductsController().getAll,
	);
	app.get(
		"/products/:id",
		{
			schema: {
				tags: ["Products"],
				params: {
					id: { type: "number" },
				},
				response: {
					200: $ref("productsSchema"),
				},
			},
		},
		new ProductsController().getOne,
	);
	app.put(
		"/products/liked",
		{
			preHandler: [authMiddleware],
			schema: {
				tags: ["Products"],
				security: [{ Bearer: [] }],
				body: $ref("putLikedSchema"),
				response: {
					200: $ref("likedSchema"),
				},
			},
		},
		new ProductsController().createLiked,
	);
	app.get(
		"/products/liked/get",
		{
			preHandler: [authMiddleware],
			schema: {
				tags: ["Products"],
				security: [{ Bearer: [] }],
				response: {
					200: $ref("getAllResponse"),
				},
			},
		},
		new ProductsController().getLiked,
	);
}
