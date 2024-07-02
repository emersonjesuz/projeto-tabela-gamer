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
  // Players: Players[];
}

// interface Players {
//   id: string;
//   nome: string;
//   squard: Squads;
//   squard_id: string;
//   bermuda: number;
//   purgatorio: number;
//   kalahari: number;
//   abates: number;
//   logo: string;
// }

export async function PUT(request: Request) {
  const squard: Squads = await request.json();
  try {
    console.log(squard);

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

    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.log(error);
  }
}
