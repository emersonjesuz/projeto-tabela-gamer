"use client";

import { Prisma } from "@/database/prisma";
import { GetServerSideProps } from "next";
import { ChangeEvent, FormEvent, useState } from "react";

export default function NovaEquipe() {
  const [form, setForm] = useState({
    nome: "",
    logo: "",
    jogador1: {
      nome: "",
      imagem: "",
    },
    jogador2: {
      nome: "",
      imagem: "",
    },
    jogador3: {
      nome: "",
      imagem: "",
    },
    jogador4: {
      nome: "",
      imagem: "",
    },
    jogador5: {
      nome: "",
      imagem: "",
    },
    jogador6: {
      nome: "",
      imagem: "",
    },
  });

  async function submit(e: FormEvent) {
    e.preventDefault();
    try {
      fetch("/api/criandoEquipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      }).then((res) => console.log(res.json()));

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={submit} className="flex items-center flex-col gap-2 py-4">
      <div className="w-full ">
        <label htmlFor="">Nome da Equipe</label>
        <input
          name="nome"
          onChange={(event) => setForm({ ...form, nome: event.target.value })}
          type="text"
          className="px-2 w-full h-8 border-2  rounded-md"
        />
      </div>
      <div className="w-full ">
        <label htmlFor="">Logo da equipe</label>
        <input
          name="logo"
          onChange={(event) => setForm({ ...form, logo: event.target.value })}
          type="text"
          className="px-2 w-full h-8 border-2  rounded-md"
        />
      </div>
      <div className="flex gap-2 ">
        <div>
          <label htmlFor="">Nome do jogador 1</label>
          <input
            name="player1"
            onChange={(event) =>
              setForm({
                ...form,
                jogador1: { ...form.jogador1, nome: event.target.value },
              })
            }
            type="text"
            className="px-2 w-full h-8 border-2  rounded-md"
          />
        </div>
        <div>
          <label htmlFor="">imagem 1</label>
          <input
            name="logoPlaquer1"
            onChange={(event) =>
              setForm({
                ...form,
                jogador1: { ...form.jogador1, imagem: event.target.value },
              })
            }
            className="px-2 w-full h-8 border-2  rounded-md"
          />
        </div>
      </div>
      <div className="flex gap-2 ">
        <div>
          <label htmlFor="">Nome do jogador 2</label>
          <input
            name="player2"
            onChange={(event) =>
              setForm({
                ...form,
                jogador2: { ...form.jogador2, nome: event.target.value },
              })
            }
            type="text"
            className="px-2 w-full h-8 border-2  rounded-md"
          />
        </div>
        <div>
          <label htmlFor="">imagem 2</label>
          <input
            name="logoPlaquer2"
            onChange={(event) =>
              setForm({
                ...form,
                jogador2: { ...form.jogador2, imagem: event.target.value },
              })
            }
            type="text"
            className="px-2 w-full h-8 border-2  rounded-md"
          />
        </div>
      </div>
      <div className="flex gap-2 ">
        <div>
          <label htmlFor="">Nome do jogador 3</label>
          <input
            name="player3"
            onChange={(event) =>
              setForm({
                ...form,
                jogador3: { ...form.jogador3, nome: event.target.value },
              })
            }
            type="text"
            className="px-2 w-full h-8 border-2  rounded-md"
          />
        </div>
        <div>
          <label htmlFor="">imagem 3</label>
          <input
            name="logoPlaquer3"
            onChange={(event) =>
              setForm({
                ...form,
                jogador3: { ...form.jogador3, imagem: event.target.value },
              })
            }
            type="text"
            className="px-2 w-full h-8 border-2  rounded-md"
          />
        </div>
      </div>
      <div className="flex gap-2 ">
        <div>
          <label htmlFor="">Nome do jogador 4</label>
          <input
            name="player4"
            onChange={(event) =>
              setForm({
                ...form,
                jogador4: { ...form.jogador4, nome: event.target.value },
              })
            }
            type="text"
            className="px-2 w-full h-8 border-2  rounded-md"
          />
        </div>
        <div>
          <label htmlFor="">imagem 4</label>
          <input
            name="logoPlaquer4"
            onChange={(event) =>
              setForm({
                ...form,
                jogador4: { ...form.jogador4, imagem: event.target.value },
              })
            }
            type="text"
            className="px-2 w-full h-8 border-2  rounded-md"
          />
        </div>
      </div>
      <div className="flex gap-2 ">
        <div>
          <label htmlFor="">Nome do jogador 5</label>
          <input
            name="player5"
            onChange={(event) =>
              setForm({
                ...form,
                jogador5: { ...form.jogador5, nome: event.target.value },
              })
            }
            type="text"
            className="px-2 w-full h-8 border-2  rounded-md"
          />
        </div>
        <div>
          <label htmlFor="">imagem 5</label>
          <input
            name="logoPlaquer5"
            onChange={(event) =>
              setForm({
                ...form,
                jogador5: { ...form.jogador5, imagem: event.target.value },
              })
            }
            type="text"
            className="px-2 w-full h-8 border-2  rounded-md"
          />
        </div>
      </div>
      <div className="flex gap-2 ">
        <div>
          <label htmlFor="">Nome do jogador 6</label>
          <input
            name="player6"
            onChange={(event) =>
              setForm({
                ...form,
                jogador6: { ...form.jogador6, nome: event.target.value },
              })
            }
            type="text"
            className="px-2 w-full h-8 border-2  rounded-md"
          />
        </div>
        <div>
          <label htmlFor="">imagem 6</label>
          <input
            name="logoPlaquer6"
            onChange={(event) =>
              setForm({
                ...form,
                jogador6: { ...form.jogador6, imagem: event.target.value },
              })
            }
            type="text"
            className="px-2 w-full h-8 border-2  rounded-md"
          />
        </div>
      </div>
      <button
        className="h-12 w-[200px] bg-azulEscuroCarvao  text-white rounded-md"
        type="submit"
      >
        Salvar
      </button>
    </form>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await Prisma.squards.findMany();
  return {
    props: {
      users,
    },
  };
};
