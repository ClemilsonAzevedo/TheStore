import { app } from "../server";
import { userRoutes } from "./userRoutes/userRoute";

export async function routes() {
	app.register(userRoutes);
}
