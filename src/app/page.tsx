import img from "@/assets/WhatsApp Image 2024-01-19 at 13.04.25.jpeg";
import Animacao from "@/components/Animacao";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Animacao>
      <main className="flex min-h-screen flex-col items-center p-2 w-full  bg-[#f2f2f2]">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col items-center p-5 gap-3 w-full bg-azulEscuroCarvao rounded-lg">
            <div className="flex  justify-center w-full h-10 my-5">
              <h1 className="font-bold  font-roboto text-center text-white text-[20px] w-full">
                Top 3 melhores Equipes
              </h1>
            </div>
            {[1, 2, 3].map((item) => (
              <div
                data-rank={item}
                className="flex items-center  w-full gap-5 pl-1 border-l-2 data-[rank='1']:border-l-dourado data-[rank='2']:border-l-azulProdundo data-[rank='3']:border-l-cinzaClaro"
              >
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
                  <div
                    data-rank={item}
                    className="flex items-center gap-2 data-[rank='1']:text-dourado data-[rank='2']:text-azulProdundo data-[rank='3']:text-cinzaClaro"
                  >
                    <span className="font-bold font-serif ">{item}°</span>
                    <h3 className="font-bold  text-[20px]  font-oswald">
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
            ))}
            <Link
              href={"/TabelaEquipes"}
              className="text-sm text-zinc-200/50 underline mt-5"
            >
              ver tabela
            </Link>
          </div>

          <div className="flex flex-col items-center p-5 gap-5 bg-azulEscuroCarvao rounded-lg">
            <div className="flex  justify-center w-full h-10 ">
              <h1 className="font-bold  font-roboto text-center text-white text-[20px] w-full">
                Top 3 melhores Jogadores
              </h1>
            </div>
            {[1, 2, 3].map((item) => (
              <div className="flex items-center flex-col relative w-full gap-5 ">
                <div className="w-[100px] h-[100px]">
                  <Image
                    data-rank={item}
                    className="w-full h-full object-contain rounded-full border-2  data-[rank='1']:border-dourado data-[rank='2']:border-azulProdundo data-[rank='3']:border-cinzaClaro"
                    src={
                      "https://i.ibb.co/kJbxDT4/Whats-App-Image-2024-01-19-at-13-04-25.jpg"
                    }
                    width={1000}
                    height={1000}
                    alt=""
                  />
                </div>

                <div className="flex flex-col  h-full">
                  <div
                    data-rank={item}
                    className="flex items-center gap-2  data-[rank='1']:text-dourado data-[rank='2']:text-azulProdundo data-[rank='3']:text-cinzaClaro"
                  >
                    <span className="font-bold font-serif  absolute top-0 left-[30px]">
                      {item}°
                    </span>
                    <h3 className="font-bold font-serif text-[20px] ">
                      macura city
                    </h3>
                  </div>
                  <div className="flex items-center flex-col">
                    <div className="flex  gap-5 items-center">
                      <span className="text-[16px] text-zinc-700">Abates</span>
                      <span className="text-[16px] text-zinc-700">1000</span>
                    </div>
                    <div className="flex gap-5 items-center">
                      <span className="text-[16px] text-zinc-700">Equipe</span>
                      <span className="text-[16px] text-zinc-700">1000</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <Link
              href={"/TabelaEquipes"}
              className="text-sm text-zinc-200/50 underline mt-5"
            >
              ver tabela
            </Link>
          </div>
        </div>
      </main>
    </Animacao>
  );
}
