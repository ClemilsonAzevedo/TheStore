import fastify from "fastify";
import { db } from "./db/db";
import { routes } from "./router";

export const app = fastify();

const { PORT = "" } = process.env;

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
		port: parseInt(PORT),
	},
	(error, address) => {
		if (error) {
			console.log(error.message);
		}
		console.log(`API rodando na porta ${address}`);
	},
);
