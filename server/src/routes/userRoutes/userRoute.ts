import { $ref } from "../../lib/schema";
import { signUpController } from "../../controllers/signUpController";
import { app } from "../../server";
import { UserController } from "../../controllers/signInController";

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
		new UserController().signUp,
	);
	app.post(
		"/signin",
		{
			schema: {
				tags: ["User"],
				body: $ref("signInSchema"),
			},
		},
		new UserController().signIn,
	);
}
