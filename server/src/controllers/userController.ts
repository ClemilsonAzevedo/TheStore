import bcrypt from "bcrypt";
import type { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import type { SignInProps, SignUpProps } from "../@types/userSchema";
import { db } from "../db/db";

export class UserController {
  async signUp(
    req: FastifyRequest<{
      Body: SignUpProps;
    }>,
    res: FastifyReply
  ) {
    const { name, password, email } = req.body;

    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      return res.status(400).send({ message: "Email já existente" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const createUser = await db.user.create({
      data: {
        email: email,
        name: name,
        password: hashPassword,
      },
    });

    const { password: _, ...userData } = createUser;

    return res.status(201).send(userData);
  }

  async signIn(
    req: FastifyRequest<{
      Body: SignInProps;
    }>,
    res: FastifyReply
  ) {
    const { email, password } = req.body;

    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return res.status(400).send({ message: "Usuario não existe" });
    }

    const verifyPass = await bcrypt.compare(password, user.password);

    if (!verifyPass) {
      return res.status(400).send({ message: "Usuario não existe" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? "", {
      expiresIn: "8h",
    });

    const { password: _, ...userData } = user;

    return res.send({
      userData,
      token: token,
    });
  }
}
