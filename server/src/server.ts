import Fastify from "fastify";
import prisma from "./client/client";

const app = Fastify();

app.get("/", (req, res) => {
	res.send("API rodando");
});

prisma
	.$connect()
	.then(() => {
		console.log("Conexão com o banco de dados estabelecida com sucesso.");
	})
	.catch((error: Error) => {
		throw new Error(error.message);
	});

const start = async () => {
	try {
		await app.listen({ port: 8080 });
		app.log.info(`API rodando na porta ${8080}`);
	} catch (error: unknown) {
		const newError = error as Error;
		app.log.error(newError);
		process.exit(1);
	}
};
start();
