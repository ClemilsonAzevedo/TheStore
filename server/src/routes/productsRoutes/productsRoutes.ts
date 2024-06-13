import { ProductsController } from "../../controllers/productsController";
import { $ref } from "../../lib/schema";
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
}
