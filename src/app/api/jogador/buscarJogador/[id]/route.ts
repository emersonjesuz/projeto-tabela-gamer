import { Prisma } from "@/database/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.split("/")[4];
  console.log(id);

  try {
    const buscarJogador = await Prisma.players.findFirst({
      where: {
        id,
      },
      include: {
        squard: true,
      },
    });

    if (!buscarJogador) {
      return NextResponse.json({
        mensagem: "jogador Não existe",
      });
    }

    return NextResponse.json(buscarJogador);
  } catch (error) {
    console.log(error);
  }
}
