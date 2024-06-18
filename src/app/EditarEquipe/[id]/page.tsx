"use client";
import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useParams, useRouter } from "next/navigation";

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

  squard_id: string;
  bermuda: number;
  purgatorio: number;
  kalahari: number;
  abates: number;
  logo: string;
}

export default function EditarEquipe() {
  const id = useParams().id;
  const router = useRouter();
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

  async function submit(e: FormEvent) {
    e.preventDefault();
    try {
      fetch("/api/editarEquipe", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("/Config");
    } catch (error) {
      alert(error);
    }
  }

  function preechendoJogadores(jogador: Players) {
    const buscarJogadorIndex = form.Players.findIndex(
      (player) => player.id === jogador.id
    );
    console.log(buscarJogadorIndex);

    if (buscarJogadorIndex !== -1) {
      const novoDados = form;
      novoDados.Players.splice(buscarJogadorIndex, 1, jogador);
      console.log(novoDados.Players);

      setForm({ ...novoDados });
    }
  }

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
        <form
          onSubmit={submit}
          className="flex items-center justify-center w-full lg:w-[50%] flex-col  gap-2 py-4"
        >
          <div className="flex gap-2 flex-col items-center  bg-cinzaClaro w-full p-2 rounded-md mb-5 shadow-lg shadow-black/35">
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
            <div
              key={index}
              className="flex flex-col w-full  gap-2 bg-zinc-400 mb-5 p-2 rounded-lg shadow-lg shadow-black/45"
            >
              <h1 className="text-xl text-white font-bold">
                Jogador {index + 1}
              </h1>
              <div>
                <label htmlFor="">Nome do jogador</label>
                <input
                  name="player1"
                  value={item.nome}
                  onChange={(event) =>
                    preechendoJogadores({ ...item, nome: event.target.value })
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
                    preechendoJogadores({ ...item, logo: event.target.value })
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
                    preechendoJogadores({
                      ...item,
                      abates: +event.target.value,
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
                      preechendoJogadores({
                        ...item,
                        bermuda: +event.target.value,
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
                      preechendoJogadores({
                        ...item,
                        kalahari: +event.target.value,
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
                      preechendoJogadores({
                        ...item,
                        purgatorio: +event.target.value,
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
            className="h-12 w-[200px] bg-cinzaAzulado  text-white rounded-md"
            type="button"
            onClick={() =>
              setForm({
                ...form,
                Players: [
                  ...form.Players,
                  {
                    nome: "",
                    logo: "",
                    abates: 0,
                    bermuda: 0,
                    kalahari: 0,
                    purgatorio: 0,
                    id: "novo",
                    squard_id: form.id,
                  },
                ],
              })
            }
          >
            Novo Jogador
          </button>
          <button
            className="h-12 w-[200px] bg-azulEscuroCarvao  text-white rounded-md"
            type="submit"
          >
            Salvar
          </button>

          <p className="text-zinc-500 text-center">
            Para excluir um jogador, basta deixar seu nome em branco:
          </p>
        </form>
      </div>
    </div>
  );
}
