import { User } from "@prisma/client";

declare module "fastify" {
	export interface FastifyRequest {
		user: Partial<User>;
	}
}
