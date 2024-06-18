import { Prisma } from "@/database/prisma";
import { NextResponse } from "next/server";
interface Squads {
  id: string;
  equipe: string;
  booyar: number;
  pontos: number;
  kills: number;
  bermuda: number;
  purgatorio: number;
  kalahari: number;
  logo: string;
  Players: Players[];
}

interface Players {
  id: string;
  nome: string;
  squard: Squads;
  squard_id: string;
  bermuda: number;
  purgatorio: number;
  kalahari: number;
  abates: number;
  logo: string;
}

export async function PUT(request: Request) {
  const squard: Squads = await request.json();
  try {
    await Prisma.squards.update({
      where: {
        id: squard.id,
      },
      data: {
        equipe: squard.equipe,
        booyar: squard.booyar,
        pontos: squard.pontos,
        kills: squard.kills,
        bermuda: squard.bermuda,
        purgatorio: squard.purgatorio,
        kalahari: squard.kalahari,
        logo: squard.logo,
      },
    });

    const listaDePlayers = squard.Players;

    for (const player of listaDePlayers) {
      if (player.id === "novo" && player.nome) {
        await Prisma.players.create({
          data: {
            nome: player.nome,
            bermuda: player.bermuda,
            purgatorio: player.purgatorio,
            kalahari: player.kalahari,
            abates: player.abates,
            logo: player.logo,
            squard_id: squard.id,
          },
        });
        continue;
      }
      if (!player.nome) {
        await Prisma.players.delete({
          where: {
            id: player.id,
          },
        });
        continue;
      }
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
          logo: player.logo,
        },
      });
    }

    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.log(error);
  }
}
