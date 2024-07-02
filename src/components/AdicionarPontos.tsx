import { FormEvent, useEffect, useState } from "react";

interface Squads {
  id: string;
  equipe: string;
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
}

export default function AdicionarPontos({ id: idSquard }: { id?: string }) {
  const [edit, setEdit] = useState<Squads>({
    id: idSquard || "",
    equipe: "",
    logo: "",
    bermuda: 0,
    purgatorio: 0,
    kalahari: 0,
    Players: [],
  });

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      fetch("/api/jogador/editarJogador", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(edit),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });
    } catch (error) {
      console.log(error);
    }
  }

  async function handlerWithPlayer(
    id: string,
    pontos: number,
    tipo: "bermuda" | "purgatorio" | "kalahari"
  ) {
    const player = edit.Players.find((player) => player.id === id);
    if (player) {
      switch (tipo) {
        case "bermuda":
          player.bermuda = pontos;
          break;
        case "purgatorio":
          player.purgatorio = pontos;
          break;
        case "kalahari":
          player.kalahari = pontos;
          break;

        default:
          break;
      }
      setEdit({ ...edit, Players: [...edit.Players] });
    }
  }

  function getNumericString(str: string): string {
    return str.replace(/\D/g, "");
  }

  useEffect(() => {
    fetch("/api/buscarEquipe/" + idSquard, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        setEdit(data);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-between gap-5 w-full  max-h-[90vh]  ">
      <h1 className="text-3xl">adicionar pontos</h1>
      <form
        onSubmit={submit}
        className="flex flex-col items-center justify-between gap-10 w-full h-full overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-black scrollbar-width-2px"
      >
        <div className="flex items-center flex-col gap-5 w-full bg-zinc-100 ">
          <h1 className="flex items-center justify-center w-full h-12 px-2 text-white bg-dourado rounded-t-md">
            {edit.equipe}
          </h1>

          <div className="flex items-center  gap-5 w-full bg-zinc-100 p-2">
            <div className="w-full flex flex-col">
              <label htmlFor="purg">Purgatorio</label>
              <input
                type="text"
                name="purg"
                id="purg"
                placeholder=""
                className="w-full h-12 bg-zinc-200  rounded-md px-2"
                onChange={(e) =>
                  setEdit({ ...edit, purgatorio: +e.target.value })
                }
                value={edit.purgatorio}
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="berm">Bermuda</label>
              <input
                type="text"
                name="berm"
                id="berm"
                placeholder=""
                className="w-full h-12 bg-zinc-200  rounded-md px-2"
                onChange={(e) => setEdit({ ...edit, bermuda: +e.target.value })}
                value={edit.bermuda}
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="kalh">Kalahari</label>
              <input
                type="text"
                name="kalh"
                id="kalh"
                placeholder=""
                className="w-full h-12 bg-zinc-200  rounded-md px-2"
                onChange={(e) =>
                  setEdit({ ...edit, kalahari: +e.target.value })
                }
                value={edit.kalahari}
              />
            </div>
          </div>
        </div>
        {edit.Players.map((item, index) => (
          <div className="flex items-center flex-col gap-5 w-full bg-zinc-100 shadow-md shadow-black/30">
            <h1 className="flex items-center justify-center w-full h-12 px-2 text-white bg-pretoCarvao rounded-t-md">
              {item.nome}
            </h1>

            <div className="flex items-center  gap-5 w-full bg-zinc-100 p-2">
              <div className="w-full flex flex-col">
                <label htmlFor="purg">Purgatorio</label>
                <input
                  type="text"
                  name="purg"
                  id="purg"
                  placeholder=""
                  className="w-full h-12 bg-zinc-200  rounded-md px-2"
                  onChange={(e) =>
                    handlerWithPlayer(
                      item.id,
                      +getNumericString(e.target.value),
                      "purgatorio"
                    )
                  }
                  value={item.purgatorio}
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="berm">Bermuda</label>
                <input
                  type="text"
                  name="berm"
                  id="berm"
                  placeholder=""
                  className="w-full h-12 bg-zinc-200  rounded-md px-2"
                  onChange={(e) =>
                    handlerWithPlayer(
                      item.id,
                      +getNumericString(e.target.value),
                      "bermuda"
                    )
                  }
                  value={item.bermuda}
                />
              </div>
              <div className="w-full flex flex-col">
                <label htmlFor="kalh">Kalahari</label>
                <input
                  type="text"
                  name="kalh"
                  id="kalh"
                  placeholder=""
                  className="w-full h-12 bg-zinc-200  rounded-md px-2"
                  onChange={(e) =>
                    handlerWithPlayer(
                      item.id,
                      +getNumericString(e.target.value),
                      "kalahari"
                    )
                  }
                  value={item.kalahari}
                />
              </div>
            </div>
          </div>
        ))}
        <button
          className="w-full min-h-[50px] bg-black text-white rounded-sm hover:opacity-80 shadow-md shadow-white/50"
          type="submit"
        >
          Salvar
        </button>
      </form>
    </div>
  );
}
