"use client";

import { LidarComEquipe } from "@/components/LidarComEquipe";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiSquareRemove } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
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
    <div className=" flex flex-col items-center  bg-[#f3f3f3] w-full h-full min-h-[80vh] relative">
      <div className="w-[95%] max-w-[700px] py-10">
        <div className="flex justify-center gap-5 mb-10 ">
          <LidarComEquipe
            tipo="novaEquipe"
            buttonClassName="w-[150px] h-[50px]"
          >
            <p className="flex items-center  justify-center h-full w-full bg-azulProdundo text-white rounded-sm hover:opacity-80">
              Nova Equipe
            </p>
          </LidarComEquipe>
        </div>
        <div className="flex flex-col gap-2 bg-white p-2 rounded-sm">
          {equipes.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-10 w-full h-[100px] bg-cinzaClaro rounded-sm mt-5 px-2 shadow-md shadow-black/45"
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
                  <span className="text-[10px] lg:text-[16px] max-w-[80px] lg:max-w-[200px]">
                    {item.equipe}
                  </span>
                </div>
              </div>
              <div className="flex gap-5">
                <Link
                  href={`/EditarEquipe/${item.id}`}
                  className="py-2 text-[26px] text-cinzaAzulado rounded-sm hover:opacity-80"
                >
                  <FaEdit />
                </Link>
                <button className="py-2   text-[26px] text-cinzaAzulado rounded-sm hover:opacity-80">
                  <MdOutlineControlPoint />
                </button>
                <button className="py-2   text-[26px] text-vermelhoVibrante te rounded-sm hover:opacity-80">
                  <CiSquareRemove />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
