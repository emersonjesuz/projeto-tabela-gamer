"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import NovaEquipe from "../../../components/Equipe";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useParams } from "next/navigation";

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

export default function EditarEquipe() {
  const id = useParams().id;
  const [form, setForm] = useState<Squads>({
    bermuda: 0,
    purgatorio: 0,
    kalahari: 0,
    id: "",
    equipe: "",
    booyar: 0,
    pontos: 0,
    kills: 0,
    logo: "",
    Players: [],
  });

  useEffect(() => {
    fetch("/api/buscarEquipe/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setForm(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="w-full  flex items-center justify-center bg-black/30">
      <div className="w-full h-full flex items-center justify-center p-2 bg-white">
        <form className="flex items-center justify-center w-full lg:w-[50%] flex-col  gap-2 py-4">
          <div className="flex gap-2 flex-col items-center  bg-cinzaClaro w-full p-2 rounded-md mb-5">
            <div className="w-full ">
              <label htmlFor="">Nome da Equipe</label>
              <input
                name="nome"
                value={form.equipe}
                onChange={(event) =>
                  setForm({ ...form, equipe: event.target.value })
                }
                type="text"
                className="px-2 w-full h-8 border-2  rounded-md"
              />
            </div>
            <div className="w-full ">
              <label htmlFor="">Logo da equipe</label>
              <input
                name="logo"
                value={form.logo}
                onChange={(event) =>
                  setForm({ ...form, logo: event.target.value })
                }
                type="text"
                className="px-2 w-full h-8 border-2  rounded-md"
              />
            </div>
            <div className="w-full flex items-center">
              <div className="flex items-center gap-2 w-full ">
                <label htmlFor="">Abates</label>
                <input
                  name="logo"
                  value={form.kills}
                  onChange={(event) =>
                    setForm({ ...form, kills: +event.target.value })
                  }
                  type="number"
                  className="px-2 w-12 h-8 border-2  rounded-md"
                />
              </div>
              <div className="flex items-center gap-2 w-full ">
                <label htmlFor="">Booayar</label>
                <input
                  name="logo"
                  value={form.booyar}
                  onChange={(event) =>
                    setForm({ ...form, booyar: +event.target.value })
                  }
                  type="number"
                  className="px-2 w-12 h-8 border-2  rounded-md"
                />
              </div>
              <div className="flex items-center gap-2 w-full ">
                <label htmlFor="">Pontos</label>
                <input
                  name="logo"
                  value={form.pontos}
                  onChange={(event) =>
                    setForm({ ...form, pontos: +event.target.value })
                  }
                  type="number"
                  className="px-2 w-12 h-8 border-2  rounded-md"
                />
              </div>
            </div>
            <div className="w-full flex items-center">
              <div className="flex items-center gap-2 w-full ">
                <label htmlFor="">Bermu</label>
                <input
                  name="logo"
                  value={form.bermuda}
                  onChange={(event) =>
                    setForm({ ...form, bermuda: +event.target.value })
                  }
                  type="number"
                  className="px-2 w-12 h-8 border-2  rounded-md"
                />
              </div>
              <div className="flex items-center gap-2 w-full ">
                <label htmlFor="">Kalah</label>
                <input
                  name="logo"
                  value={form.kalahari}
                  onChange={(event) =>
                    setForm({ ...form, kalahari: +event.target.value })
                  }
                  type="number"
                  className="px-2 w-12 h-8 border-2  rounded-md"
                />
              </div>
              <div className="flex items-center gap-2 w-full ">
                <label htmlFor="">Purga</label>
                <input
                  name="logo"
                  value={form.purgatorio}
                  onChange={(event) =>
                    setForm({ ...form, purgatorio: +event.target.value })
                  }
                  type="number"
                  className="px-2 w-12 h-8 border-2  rounded-md"
                />
              </div>
            </div>
          </div>
          {form.Players.map((item, index) => (
            <div className="flex flex-col w-full  gap-2 bg-zinc-400 mb-5 p-2">
              <h1 className="text-xl text-white font-bold">
                Jogador {index + 1}
              </h1>
              <div>
                <label htmlFor="">Nome do jogador</label>
                <input
                  name="player1"
                  value={item.nome}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      Players: [
                        ...form.Players,
                        { ...form.Players[index], nome: event.target.value },
                      ],
                    })
                  }
                  type="text"
                  className="px-2 w-full h-8 border-2  rounded-md"
                />
              </div>
              <div>
                <label htmlFor="">imagem</label>
                <input
                  name="logoPlaquer1"
                  value={item.logo}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      Players: [
                        ...form.Players,
                        {
                          ...form.Players[index],
                          logo: event.target.value,
                        },
                      ],
                    })
                  }
                  className="px-2 w-full h-8 border-2  rounded-md"
                />
              </div>
              <div>
                <label htmlFor="">Abates Total</label>
                <input
                  name="logoPlaquer1"
                  value={item.abates}
                  onChange={(event) =>
                    setForm({
                      ...form,
                      Players: [
                        ...form.Players,
                        {
                          ...form.Players[index],
                          abates: +event.target.value,
                        },
                      ],
                    })
                  }
                  type="number"
                  className="px-2 w-full h-8 border-2  rounded-md"
                />
              </div>

              <div className="w-full flex items-center">
                <div className="flex items-center gap-2 w-full ">
                  <label htmlFor="">Bermu</label>
                  <input
                    name="logo"
                    value={item.bermuda}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        Players: [
                          ...form.Players,
                          {
                            ...form.Players[index],
                            bermuda: +event.target.value,
                          },
                        ],
                      })
                    }
                    type="number"
                    className="px-2 w-12 h-8 border-2  rounded-md"
                  />
                </div>
                <div className="flex items-center gap-2 w-full ">
                  <label htmlFor="">Kalah</label>
                  <input
                    name="logo"
                    value={item.kalahari}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        Players: [
                          ...form.Players,
                          {
                            ...form.Players[index],
                            kalahari: +event.target.value,
                          },
                        ],
                      })
                    }
                    type="number"
                    className="px-2 w-12 h-8 border-2  rounded-md"
                  />
                </div>
                <div className="flex items-center gap-2 w-full ">
                  <label htmlFor="">Purga</label>
                  <input
                    name="logo"
                    value={item.purgatorio}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        Players: [
                          ...form.Players,
                          {
                            ...form.Players[index],
                            purgatorio: +event.target.value,
                          },
                        ],
                      })
                    }
                    type="number"
                    className="px-2 w-12 h-8 border-2  rounded-md"
                  />
                </div>
              </div>
            </div>
          ))}

          <button
            className="h-12 w-[200px] bg-azulEscuroCarvao  text-white rounded-md"
            type="submit"
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
