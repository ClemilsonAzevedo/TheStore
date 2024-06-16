import { app } from "../server";
import { productsRoutes } from "./productsRoutes/productsRoutes";
import { userRoutes } from "./userRoutes/userRoute";

export async function routes() {
	app.register(userRoutes);
	app.register(productsRoutes);
}
