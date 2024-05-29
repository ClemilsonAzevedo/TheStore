import fastify from "fastify";
import { db } from "./db/db";
import { routes } from "./routes/router";
import { Schemas } from "./lib/schema";
import swagger from "@fastify/swagger";
import swaggerui from "@fastify/swagger-ui";

const swaggerOptions = {
	swagger: {
		info: {
			title: "My Title",
			description: "My Description.",
			version: "1.0.0",
		},
		tags: [{ name: "User" }],
	},
};

const swaggerUiOptions = {
	routePrefix: "/docs",
	exposeRoute: true,
};

export const app = fastify();

const { PORT = "" } = process.env;

for (const schema of [...Schemas]) {
	app.addSchema(schema);
}

app.register(swagger, swaggerOptions);
app.register(swaggerui, swaggerUiOptions);

app.get("/", () => {
	return "Api rodando";
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
