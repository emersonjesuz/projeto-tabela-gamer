import Image from "next/image";

export default function Tabela({
  tipo,
  dados,
}: {
  tipo: "equipe" | "jogador";
  dados: any[];
}) {
  return (
    <div className="flex flex-col items-center w-full  ">
      <div className="w-[90%] bg-white">
        <div className="flex items-center gap-2  w-full px-2 ">
          <span></span>
          <span>EQUIPE</span>
          <span>ABATES</span>
          <span>BOOYAR</span>
          <span>PONTOS</span>
        </div>
        {dados.map((item) => (
          <div className="flex items-center justify-between gap-2">
            <span></span>
            <div className="w-10 h-10">
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
            <span>afdfasfsfa</span>
            <span>afdfasfsfa</span>
            <span>afdfasfsfa</span>
            <span>afdfasfsfa</span>
          </div>
        ))}
      </div>
    </div>
  );
}
