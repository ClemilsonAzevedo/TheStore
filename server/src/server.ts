import fastify from "fastify";
import { db } from "./db/db";
import { routes } from "./routes/router";
import { Schemas } from "./lib/schema";
import swagger from "@fastify/swagger";
import swaggerui from "@fastify/swagger-ui";
import cors from "@fastify/cors";

export const app = fastify();

const { PORT = "" } = process.env;

for (const schema of [...Schemas]) {
	app.addSchema(schema);
}

app.register(swagger, {
	swagger: {
		info: {
			title: "The Store API",
			description: "Melhor API do Brasil.",
			version: "1.0.0",
		},
		tags: [{ name: "User" }, { name: "Products" }],
		securityDefinitions: {
			Bearer: {
				type: "apiKey",
				name: "Authorization",
				in: "header",
				description: "Insira o token no formato: Bearer <token>",
			},
		},
	},
});
app.register(swaggerui, { routePrefix: "/docs" });

app.register(cors, {
	origin: ["*"],
	methods: ["GET", "POST", "PUT", "DELETE"],
	allowedHeaders: ["Content-Type", "Authorization"],
});

app.register(routes);

db.$connect()
	.then(() => {
		console.log("Conexão com o banco de dados estabelecida com sucesso.");
	})
	.catch((error: Error) => {
		throw new Error(error.message);
	});

app.listen(
	{
		port: Number.parseInt(PORT),
	},
	(error, address) => {
		if (error) {
			console.log(error.message);
		}
		console.log(`API rodando na porta ${address}`);
	},
);
