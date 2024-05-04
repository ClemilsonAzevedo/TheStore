import Fastify from "fastify";

const app = Fastify();

app.get("/", (req, res) => {
	res.send("API rodando");
});

const start = async () => {
	try {
		await app.listen({ port: 8080 });
		app.log.info(`API rodando na porta ${8080}`);
	} catch (error) {
		app.log.error(error);
		process.exit(1);
	}
};
start();
