import { PrismaClient } from "@prisma/client";
import { products } from "./data.mjs";

const prisma = new PrismaClient();

async function seeding() {
  try {
    if (await prisma.products.findMany()) {
      await prisma.products.deleteMany();
      await prisma.$queryRaw`ALTER SEQUENCE "Products_id_seq" RESTART WITH 1`;

      console.log("reset products");
    }

    await prisma.products.createMany({
      data: products,
    });

    console.log("seed complete");
  } catch (error) {
    console.log(error.message);
  }
}

seeding();
