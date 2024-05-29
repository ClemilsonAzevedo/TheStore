import { $ref } from "../../lib/schema";
import { signUpController } from "../../controllers/signUpController";
import { app } from "../../server";
import { signInController } from "../../controllers/signInController";

export async function userRoutes() {
	app.post(
		"/signup",
		{
			schema: {
				tags: ["User"],
				body: $ref("signUpSchema"),
				response: {
					200: $ref("signUpResponse"),
				},
			},
		},
		signUpController,
	);
	app.post(
		"/signin",
		{
			schema: {
				tags: ["User"],
				body: $ref("signInSchema"),
			},
		},
		signInController,
	);
}
