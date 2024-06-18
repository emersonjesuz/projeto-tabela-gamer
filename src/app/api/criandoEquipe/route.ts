import { Prisma } from "@/database/prisma";
import { NextResponse } from "next/server";
interface Form {
  nome: string;
  logo: string;
  jogador1: {
    nome: string;
    imagem: string;
  };
  jogador2: {
    nome: string;
    imagem: string;
  };
  jogador3: {
    nome: string;
    imagem: string;
  };
  jogador4: {
    nome: string;
    imagem: string;
  };
  jogador5: {
    nome: string;
    imagem: string;
  };
  jogador6: {
    nome: string;
    imagem: string;
  };
}

interface Jogador {
  nome: string;
  logo: string;
  squard_id: string;
}

export async function POST(request: Request) {
  const form: Form = await request.json();
  try {
    const verificarPorNome = await Prisma.squards.findFirst({
      where: {
        equipe: form.nome,
      },
    });

    if (verificarPorNome) {
      return NextResponse.json({
        mensagem: "Equipe ja existe",
      });
    }

    const listaDePlayers = await Prisma.players.findMany();

    for (const player of listaDePlayers) {
      if (
        player.nome === form.jogador1.nome ||
        player.nome === form.jogador2.nome ||
        player.nome === form.jogador3.nome ||
        player.nome === form.jogador4.nome ||
        player.nome === form.jogador5.nome ||
        player.nome === form.jogador6.nome
      ) {
        return NextResponse.json({
          mensagem: "Jogador ja existe",
        });
      }
    }

    const dados = await Prisma.squards.create({
      data: {
        equipe: form.nome,
        booyar: 0,
        pontos: 0,
        kills: 0,
        bermuda: 0,
        purgatorio: 0,
        kalahari: 0,
        logo: form.logo,
      },
    });

    const todosOsPlayers: Jogador[] = [];

    Object.entries(form).forEach(([key, value]) => {
      if (key !== "logo" && key !== "nome") {
        todosOsPlayers.push({
          logo: value.imagem,
          nome: value.nome,
          squard_id: dados.id,
        });
      }
    });

    await Prisma.players.createMany({
      data: todosOsPlayers,
    });

    return NextResponse.json({ message: "ok" });
  } catch (error) {
    console.log(error);
  }
}
