import { Prisma } from "@/database/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const listaDeEquipes = await Prisma.squards.findMany({
      include: {
        Players: true,
      },
    });

    return NextResponse.json(listaDeEquipes);
  } catch (error) {
    return NextResponse.json({ error: [] });
  }
}
