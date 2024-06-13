import { FastifyReply, FastifyRequest } from "fastify";
import { db } from "../db/db";

export class ProductsController {
  async getAll(req: FastifyRequest, res: FastifyReply) {
    const products = await db.products.findMany();

    return res.send(products);
  }
}
