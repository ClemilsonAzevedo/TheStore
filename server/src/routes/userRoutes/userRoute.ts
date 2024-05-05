import { $ref } from "../../@types/signUpSchema";
import { signUpController } from "../../controllers/signUpController";
import { app } from "../../server";

export async function userRoutes() {
	app.post(
		"/teste",
		{
			schema: {
				body: $ref("createUserSchema"),
				response: {
					201: $ref("createUserResponseSchema"),
				},
			},
		},
		signUpController,
	);

	app.post(
		"/login",
		{
			schema: {
				body: $ref("createUserSchema"),
				response: {
					201: $ref("createUserResponseSchema"),
				},
			},
		},
		() => {},
	);
}
