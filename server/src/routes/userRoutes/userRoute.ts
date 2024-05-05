import { $ref } from "../../lib/schema";
import { signUpController } from "../../controllers/signUpController";
import { app } from "../../server";

export async function userRoutes() {
	app.post(
		"/teste",
		{
			schema: {
				body: $ref("signUpSchema"),
				response: {
					201: $ref("signUpResponseSchema"),
				},
			},
		},
		signUpController,
	);
	app.post(
		"/login",
		{
			schema: {
				body: $ref("signInSchema"),
				response: {
					201: $ref("createUserResponseSchema"),
				},
			},
		},
		() => {},
	);
}
