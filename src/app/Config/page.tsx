"use client";

import { LidarComEquipe } from "@/components/LidarComEquipe";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CiEdit, CiSquareRemove } from "react-icons/ci";
import { MdOutlineControlPoint } from "react-icons/md";

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

export default function Config() {
  const [equipes, setEquipes] = useState<Squads[]>([]);

  useEffect(() => {
    fetch("/api/listaDeEquipes", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setEquipes(data);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }, []);
  return (
    <div className=" flex flex-col items-center  bg-[#f2f2f2] w-full h-full min-h-[80vh] relative">
      <div className="w-[95%] lg:max-w-[50vw] py-10">
        <div className="flex justify-center lg:justify-end gap-5 mb-10 ">
          <LidarComEquipe
            tipo="novaEquipe"
            buttonClassName="w-[300px] h-[50px]"
          >
            <p className="flex items-center  justify-center h-full w-full bg-black text-white rounded-sm hover:opacity-80">
              Nova Equipe
            </p>
          </LidarComEquipe>
        </div>
        <div className="flex flex-col gap-2 p-2 rounded-sm ">
          {equipes.map((item) => (
            <>
              <div
                key={item.id}
                className="flex items-center justify-between gap-10 w-full h-[70px]  rounded-sm mt-5 px-2 bg-zinc-400"
              >
                <div className="flex justify-between">
                  <div className="flex items-center  gap-5">
                    <div className="w-12 h-full ">
                      <Image
                        className="w-full h-full object-contain rounded-md"
                        src={
                          !item.logo
                            ? "https://i.ibb.co/kJbxDT4/Whats-App-Image-2024-01-19-at-13-04-25.jpg"
                            : item.logo
                        }
                        width={1000}
                        height={1000}
                        alt=""
                      />
                    </div>
                    <span className="text-[16px] max-w-[80px] lg:max-w-[200px]">
                      {item.equipe}
                    </span>
                  </div>
                </div>
                <div className="flex gap-5">
                  <LidarComEquipe
                    buttonClassName="py-2 text-[26px] text-black/50 rounded-sm hover:opacity-80"
                    tipo="editarEquipe"
                    id={item.id}
                  >
                    <CiEdit />
                  </LidarComEquipe>

                  <LidarComEquipe
                    tipo="adicionarPontos"
                    id={item.id}
                    buttonClassName="py-2 text-[26px] text-black/50 rounded-sm hover:opacity-80"
                  >
                    <MdOutlineControlPoint />
                  </LidarComEquipe>

                  <button className="py-2 text-[26px] text-vermelhoVibrante te rounded-sm hover:opacity-80">
                    <CiSquareRemove />
                  </button>
                </div>
              </div>
              <div className="flex items-center flex-col  gap-2">
                {item.Players.map((player) => (
                  <div
                    key={player.id}
                    className="flex items-center justify-between gap-10 w-full h-[30px] border-b-2 px-5"
                  >
                    <div className="flex items-center justify-between  gap-5 w-full">
                      <span className="text-[10px]bv lg:text-[16px] lg:max-w-[150px] w-full">
                        {player.nome}
                      </span>
                      <div className="flex items-center gap-4">
                        <LidarComEquipe
                          buttonClassName="py-2 text-[16px] text-black rounded-sm hover:opacity-80"
                          tipo="editarJogador"
                          id={player.id}
                        >
                          <CiEdit />
                        </LidarComEquipe>
                        <CiSquareRemove className="cursor-pointer text-black hover:fill-red-500" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
