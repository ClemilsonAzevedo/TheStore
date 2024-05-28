import { app } from "../server";
import swagger from "@fastify/swagger";
import swaggerui from "@fastify/swagger-ui";
import { userRoutes } from "./userRoutes/userRoute";

export async function routes() {
	app.register(swagger);
	app.register(swaggerui, {
		routePrefix: "/docs",
	});
	app.register(userRoutes);
}
