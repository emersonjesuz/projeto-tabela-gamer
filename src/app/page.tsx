import img from "@/assets/WhatsApp Image 2024-01-19 at 13.04.25.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-2 w-full h-full  bg-[url('/src/assets/fundo.png')">
      <div className="flex flex-col w-full ">
        <div className="flex items-center justify-center w-full flex-col my-5">
          <h1 className="font-bold text-black text-[20px] ">
            Top 3 melhores squard
          </h1>
          <p className=" text-zinc-400 text-[20px]">
            {" "}
            As melhores equipes do momento
          </p>
        </div>
        <div className="flex flex-col items-center p-5 gap-3 bg-azulEscuroCarvao rounded-lg">
          <div className="flex  justify-end w-full h-10 ">
            <Link href={"/"} className="text-sm text-zin">
              ver tabela
            </Link>
          </div>
          <div className="flex items-center  w-full gap-5 pl-1 border-l-2 border-l-dourado">
            <div className="w-[100px] h-[100px]">
              <Image
                className="w-full h-full object-contain"
                src={
                  "https://i.ibb.co/kJbxDT4/Whats-App-Image-2024-01-19-at-13-04-25.jpg"
                }
                width={1000}
                height={1000}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-5 h-full">
              <div className="flex items-center gap-2">
                <span className="font-bold font-serif text-dourado">1°</span>
                <h3 className="font-bold font-serif text-[20px] text-dourado">
                  macura city
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-zinc-700">BERM</span>
                  <span className="text-sm text-zinc-700">1000</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-zinc-700">KALH</span>
                  <span className="text-sm text-zinc-700">1000</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-zinc-700">PURG</span>
                  <span className="text-sm text-zinc-700">1000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center  w-full gap-5 pl-1 border-l-2 border-l-cinzaAzulado">
            <div className="w-[100px] h-[100px]">
              <Image
                className="w-full h-full object-contain"
                src={
                  "https://i.ibb.co/60Hq6Wj/Whats-App-Image-2024-01-19-at-13-04-25-removebg-preview.png"
                }
                width={1000}
                height={1000}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-5 h-full">
              <div className="flex items-center gap-2">
                <span className="font-bold font-serif text-cinzaAzulado">
                  2°
                </span>
                <h3 className="font-bold font-serif text-[20px] text-cinzaAzulado">
                  macura city
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-zinc-700">BERM</span>
                  <span className="text-sm text-zinc-700">1000</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-zinc-700">KALH</span>
                  <span className="text-sm text-zinc-700">1000</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-zinc-700">PURG</span>
                  <span className="text-sm text-zinc-700">1000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center  w-full gap-5 pl-1 border-l-2 border-l-cinzaClaro">
            <div className="w-[100px] h-[100px]">
              <Image
                className="w-full h-full object-contain"
                src={img}
                width={1000}
                height={1000}
                alt=""
              />
            </div>

            <div className="flex flex-col gap-5 h-full">
              <div className="flex items-center gap-2">
                <span className="font-bold font-serif text-cinzaClaro">3°</span>
                <h3 className="font-bold font-serif text-[20px] text-cinzaClaro">
                  macura city
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-zinc-700">BERM</span>
                  <span className="text-sm text-zinc-700">1000</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-zinc-700">KALH</span>
                  <span className="text-sm text-zinc-700">1000</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-zinc-700">PURG</span>
                  <span className="text-sm text-zinc-700">1000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full flex-col my-5">
          <h1 className="font-bold text-black text-[20px] ">
            Top 3 melhores Jogadores
          </h1>
          <p className=" text-zinc-400 text-[20px]">
            {" "}
            Os melhores jogadores do momento.
          </p>
        </div>
        <div className="flex flex-col items-center p-5 gap-5 bg-azulEscuroCarvao rounded-lg">
          <div className="flex  justify-end w-full h-10 ">
            <Link href={"/"} className="text-sm text-zin">
              ver tabela
            </Link>
          </div>
          <div className="flex items-center flex-col relative w-full gap-5 ">
            <div className="w-[100px] h-[100px]">
              <Image
                className="w-full h-full object-contain rounded-full border-2 border-dourado"
                src={
                  "https://i.ibb.co/kJbxDT4/Whats-App-Image-2024-01-19-at-13-04-25.jpg"
                }
                width={1000}
                height={1000}
                alt=""
              />
            </div>

            <div className="flex flex-col  h-full">
              <div className="flex items-center gap-2">
                <span className="font-bold font-serif text-dourado absolute top-0 left-[30px]">
                  1°
                </span>
                <h3 className="font-bold font-serif text-[20px] text-dourado">
                  macura city
                </h3>
              </div>
              <div className="flex items-center ">
                <div className="flex gap-5 items-center">
                  <span className="text-[16px] text-zinc-700">Abates</span>
                  <span className="text-[16px] text-zinc-700">1000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col relative w-full gap-5 ">
            <div className="w-[100px] h-[100px]">
              <Image
                className="w-full h-full object-contain rounded-full border-2 border-cinzaAzulado"
                src={
                  "https://i.ibb.co/kJbxDT4/Whats-App-Image-2024-01-19-at-13-04-25.jpg"
                }
                width={1000}
                height={1000}
                alt=""
              />
            </div>

            <div className="flex flex-col  h-full">
              <div className="flex items-center gap-2">
                <span className="font-bold font-serif text-cinzaAzulado absolute top-0 left-[30px]">
                  2°
                </span>
                <h3 className="font-bold font-serif text-[20px] text-cinzaAzulado">
                  macura city
                </h3>
              </div>
              <div className="flex items-center ">
                <div className="flex gap-5 items-center">
                  <span className="text-[16px] text-zinc-700">Abates</span>
                  <span className="text-[16px] text-zinc-700">1000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col relative w-full gap-5 ">
            <div className="w-[100px] h-[100px]">
              <Image
                className="w-full h-full object-contain rounded-full border-2 border-cinzaClaro"
                src={
                  "https://i.ibb.co/kJbxDT4/Whats-App-Image-2024-01-19-at-13-04-25.jpg"
                }
                width={1000}
                height={1000}
                alt=""
              />
            </div>

            <div className="flex flex-col  h-full">
              <div className="flex items-center gap-2">
                <span className="font-bold font-serif text-cinzaClaro absolute top-0 left-[30px]">
                  3°
                </span>
                <h3 className="font-bold font-serif text-[20px] text-cinzaClaro">
                  macura city
                </h3>
              </div>
              <div className="flex items-center ">
                <div className="flex gap-5 items-center">
                  <span className="text-[16px] text-zinc-700">Abates</span>
                  <span className="text-[16px] text-zinc-700">1000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
