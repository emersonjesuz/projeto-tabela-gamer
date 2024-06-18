import { Prisma } from "@/database/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/")[3];
  console.log(id);

  try {
    const buscarEquipe = await Prisma.squards.findFirst({
      where: {
        id,
      },
      include: {
        Players: true,
      },
    });

    if (!buscarEquipe) {
      return NextResponse.json({
        mensagem: "Equipe Não existe",
      });
    }

    return NextResponse.json(buscarEquipe);
  } catch (error) {
    console.log(error);
  }
}
