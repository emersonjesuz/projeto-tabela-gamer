import { PrismaClient } from "@prisma/client";

export const Prisma = new PrismaClient({
  transactionOptions: { timeout: 20000, maxWait: 20 },
});
