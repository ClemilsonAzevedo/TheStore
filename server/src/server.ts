import fastify from "fastify";
import { db } from "./db/db";

const app = fastify();

app.get("/", () => {
	return "Api rodando";
});

db.$connect()
	.then(() => {
		console.log("Conexão com o banco de dados estabelecida com sucesso.");
	})
	.catch((error: Error) => {
		throw new Error(error.message);
	});

const { PORT = "" } = process.env;

app
	.listen({
		port: parseInt(PORT),
	})
	.then(() => {
		console.log(`API rodando na porta ${process.env.PORT}`);
	});
