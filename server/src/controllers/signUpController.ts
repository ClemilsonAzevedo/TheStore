import type { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

export class SignUpController {
    async create(app: FastifyInstance) {
        app.get("/teste", (req: FastifyRequest, res: FastifyReply) => {
            return res.send("funcionou");
        });
    }
  }