import Image from "next/image";
import Link from "next/link";
interface Props {
  titulo: string;
  equipes: any[];
  link: string;
}

export default function Top3Jogadores({ equipes, link, titulo }: Props) {
  return (
    <div className="flex flex-col items-center p-5 gap-5  bg-black shadow-md shadow-black/50 rounded-lg lg:rounded-2xl">
      <div className="flex  justify-center w-full h-10 my-5">
        <h1 className="font-bold  font-roboto text-center text-white text-[20px] w-full">
          {titulo}
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 w-full">
        {equipes.map((item) => (
          <div className="flex items-center flex-col relative w-full gap-5 ">
            <div className="w-[100px] h-[100px] relative">
              <Image
                data-rank={item}
                className="w-full h-full object-contain rounded-full border-2  data-[rank='1']:border-dourado data-[rank='2']:border-dourado/50 data-[rank='3']:border-dourado/20"
                src={
                  "https://i.ibb.co/kJbxDT4/Whats-App-Image-2024-01-19-at-13-04-25.jpg"
                }
                width={1000}
                height={1000}
                alt=""
              />
              <Image
                data-rank={item}
                className="absolute bottom-0 right-0 w-10 h-10 object-contain rounded-full border-2 border-cinzaClaro/50"
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
                className="flex items-center justify-center gap-2  data-[rank='1']:text-dourado data-[rank='2']:text-dourado/50 data-[rank='3']:text-dourado/20"
              >
                <span className="font-bold font-serif  absolute top-0 left-[30px]">
                  {item}°
                </span>
                <h3 className="font-bold font-serif text-[20px] w-[80%] text-center">
                  macura city dsfsd dfgdfg dfgd{" "}
                </h3>
              </div>
              <div className="flex items-center flex-col">
                <div className="flex  gap-5 items-center">
                  <span className="text-[16px] text-zinc-700">Abates</span>
                  <span className="text-[16px] text-zinc-700">1000</span>
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
