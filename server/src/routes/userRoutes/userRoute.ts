import { $ref } from "../../lib/schema";
import { signUpController } from "../../controllers/signUpController";
import { app } from "../../server";
import { signInController } from "../../controllers/signInController";

export async function userRoutes() {
	app.post(
		"/signup",
		{
			schema: {
				body: $ref("signUpSchema"),
			},
		},
		signUpController,
	);
	app.post(
		"/signin",
		{
			schema: {
				body: $ref("signInSchema"),
			},
		},
		signInController,
	);
}
