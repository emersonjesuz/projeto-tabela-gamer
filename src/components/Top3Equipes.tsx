import Image from "next/image";
import Link from "next/link";

interface Props {
  titulo: string;
  equipes: any[];
  link: string;
}

export default function Top3Equipes({ equipes, link, titulo }: Props) {
  return (
    <div className="flex flex-col items-center lg:justify-between lg:py-10 p-5 gap-3 w-full shadow-md shadow-black/50  bg-pretoCarvao rounded-lg lg:rounded-2xl">
      <div className="flex  justify-center  w-full h-10 my-5">
        <h1 className="font-bold  font-roboto text-center capitalize text-white text-[20px] lg:text-[30px] w-full">
          {titulo}
        </h1>
      </div>
      <div className=" flex flex-col lg:flex-row items-center p-5 gap-3 w-full">
        {equipes.map((item) => (
          <div
            data-rank={item}
            className="flex items-center lg:flex-col w-full gap-5 pl-1 border-l-2 lg:border-none data-[rank='1']:border-l-dourado data-[rank='2']:border-l-dourado/50 data-[rank='3']:border-l-dourado/20"
          >
            <div className="w-[100px] h-[100px] lg:w-[200px] lg:h-[200px] ">
              <Image
                data-rank={item}
                className="w-full h-full object-contain rounded-lg border-2  data-[rank='1']:border-dourado data-[rank='2']:border-dourado/50 data-[rank='3']:border-dourado/20"
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
                className="flex items-center gap-2 data-[rank='1']:text-dourado data-[rank='2']:text-dourado/50 data-[rank='3']:text-dourado/20"
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
      </div>
      <Link href={link} className="text-sm text-zinc-200/50 underline mt-5">
        {link && "ver tabela"}
      </Link>
    </div>
  );
}
