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
    new ProductsController().getAll
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
    new ProductsController().getOne
  );
  app.get(
    "/products/liked",
    {
      preHandler: [authMiddleware],
    },
    new ProductsController().createLiked
  );
}
