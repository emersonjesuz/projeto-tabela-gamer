import { Prisma } from "@/database/prisma";
import { NextResponse } from "next/server";

interface Players {
  id: string;
  nome: string;
  squard_id: string;
  bermuda: number;
  purgatorio: number;
  kalahari: number;
  abates: number;
  logo: string;
}

export async function PUT(request: Request) {
  const player: Players = await request.json();
  try {
    console.log(player);

    await Prisma.players.update({
      where: {
        id: player.id,
      },
      data: {
        nome: player.nome,
        bermuda: player.bermuda,
        purgatorio: player.purgatorio,
        kalahari: player.kalahari,
        abates: player.abates,
        squard_id: player.squard_id,
        logo: player.logo,
      },
    });

    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.log(error);
  }
}
