import { SignUpController } from "./controllers/signUpController";
import { app } from "./server";

export const routes = async () => {
	app.register(new SignUpController().create);
};
