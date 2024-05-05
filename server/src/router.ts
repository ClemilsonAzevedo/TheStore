import { $ref } from "./@types/teste";
import { signUpController } from "./controllers/signUpController";
import { app } from "./server";

export const routes = async () => {
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
};
