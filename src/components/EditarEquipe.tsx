import { FormEvent, useEffect, useState } from "react";

export default function EditarEquipe({ id }: { id?: string }) {
  const [edit, setEdit] = useState({
    id,
    equipe: "",
    logo: "",
    pontos: 0,
    kills: 0,
    booyar: 0,
    purgatorio: 0,
    kalahari: 0,
    bermuda: 0,
  });

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      fetch("/api/editarEquipe", {
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

  useEffect(() => {
    fetch("/api/buscarEquipe/" + id, {
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
    <div className="flex flex-col items-center justify-between gap-5 w-full h-[500px]">
      <h1 className="text-3xl">Editar Equipe</h1>
      <form
        onSubmit={submit}
        className="flex flex-col items-center justify-between gap-5 w-full h-full"
      >
        <div className="w-full">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Nome da Equipe"
            className="border-2 border-zinc-200 w-full h-12 px-2 rounded-md"
            onChange={(e) => setEdit({ ...edit, equipe: e.target.value })}
            value={edit.equipe}
          />
        </div>
        <div className="w-full">
          <label htmlFor="logo">Logo</label>
          <input
            type="text"
            name="logo"
            id="logo"
            placeholder="Logo da Equipe"
            className="border-2 border-zinc-200 w-full h-12 px-2 rounded-md"
            onChange={(e) => setEdit({ ...edit, logo: e.target.value })}
            value={edit.logo}
          />
        </div>
        <div className="flex items-center  gap-5 w-full bg-zinc-100 p-2">
          <div className="w-full flex flex-col">
            <label htmlFor="pontos">Pontos</label>
            <input
              type="text"
              name="pontos"
              id="pontos"
              placeholder=""
              className="w-12 h-12 bg-zinc-200  rounded-md px-2"
              onChange={(e) => setEdit({ ...edit, pontos: +e.target.value })}
              value={edit.pontos}
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="abates">Abates</label>
            <input
              type="text"
              name="abates"
              id="abates"
              placeholder=""
              className="w-12 h-12 bg-zinc-200  rounded-md px-2"
              onChange={(e) => setEdit({ ...edit, kills: +e.target.value })}
              value={edit.kills}
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="booyar">Booyar</label>
            <input
              type="text"
              name="booyar"
              id="booyar"
              placeholder=""
              className="w-12 h-12 bg-zinc-200  rounded-md px-2"
              onChange={(e) => setEdit({ ...edit, booyar: +e.target.value })}
              value={edit.booyar}
            />
          </div>
        </div>
        <div className="flex items-center  gap-5 w-full bg-zinc-100 p-2">
          <div className="w-full flex flex-col">
            <label htmlFor="purg">Purgatorio</label>
            <input
              type="text"
              name="purg"
              id="purg"
              placeholder=""
              className="w-12 h-12 bg-zinc-200  rounded-md px-2"
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
              className="w-12 h-12 bg-zinc-200  rounded-md px-2"
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
              className="w-12 h-12 bg-zinc-200  rounded-md px-2"
              onChange={(e) => setEdit({ ...edit, booyar: +e.target.value })}
              value={edit.booyar}
            />
          </div>
        </div>
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
