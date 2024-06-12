import { $ref } from "../../lib/schema";
import { app } from "../../server";
import { UserController } from "../../controllers/userController";

export async function userRoutes() {
  app.post(
    "/user/signup",
    {
      schema: {
        tags: ["User"],
        body: $ref("signUpSchema"),
        response: {
          200: $ref("signUpResponse"),
        },
      },
    },
    new UserController().signUp
  );
  app.post(
    "/user/signin",
    {
      schema: {
        tags: ["User"],
        body: $ref("signInSchema"),
      },
    },
    new UserController().signIn
  );
}
