import Image from "next/image";

export default function Tabela({
  tipo,
  dados,
}: {
  tipo: "equipe" | "jogador";
  dados: any[];
}) {
  return (
    <div className="flex flex-col items-center w-full pb-10">
      <div className="w-[95%] lg:w-[80%] bg-white  rounded-lg shadow-lg shadow-black/50">
        <div className="flex items-center justify-between gap-2  w-full h-12 px-5 bg-slate-500 rounded-t-lg">
          {tipo === "equipe" ? (
            <>
              <div className="flex items-center gap-2">
                <span className="w-5"></span>
                <span className="w-[120px] text-[16px] lg:text-[20px] text-cinzaClaro">
                  EQUIPE
                </span>
              </div>
              <div className="flex items-center gap-12 lg:pr-5">
                <span className="text-[16px]">A</span>
                <span className="text-[16px]">B</span>
                <span className="text-[16px]">P</span>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2">
                <span className="w-5"></span>
                <span className="w-[120px] text-[16px] lg:text-[20px] text-cinzaClaro">
                  Jogador
                </span>
              </div>
              <span className="text-[16px]">A</span>
            </>
          )}
        </div>
        {tipo === "equipe"
          ? dados.map((item, index) => (
              <div className="flex items-center justify-between  gap-2 my-2 border-b-2 border-b-[#f2f2f2f2] pb-2 mx-5">
                <div className="flex items-center gap-2 lg:w-[400px]">
                  <span
                    data-top3={index < 3 ? true : false}
                    data-top20={index < 9 ? true : false}
                    className="w-5 text-vermelhoVibrante data-[top3=true]:text-dourado data-[top20=true]:text-black text-[16px] font-bold"
                  >
                    {index + 1}
                  </span>
                  <div className="w-10 h-10 ">
                    <Image
                      className="w-full h-full object-contain rounded-md"
                      src={
                        "https://i.ibb.co/kJbxDT4/Whats-App-Image-2024-01-19-at-13-04-25.jpg"
                      }
                      width={1000}
                      height={1000}
                      alt=""
                    />
                  </div>
                  <span className="text-[10px] lg:text-[16px] max-w-[80px] lg:max-w-[200px]">
                    os cagaceiros do certão
                  </span>
                </div>
                <div className="flex items-center lg:gap-12 gap-10 ">
                  <span className="text-[10px] lg:text-[16px]">100</span>
                  <span className="text-[10px] lg:text-[16px]">100</span>
                  <span className="text-[10px] lg:text-[16px]">1000</span>
                </div>
              </div>
            ))
          : dados.map((item, index) => (
              <div className="flex items-center justify-between  gap-2 my-2 border-b-2 border-b-[#f2f2f2f2] pb-2 mx-5">
                <div className="flex items-center gap-2">
                  <span
                    data-top3={index < 3 ? true : false}
                    data-top20={index < 20 ? true : false}
                    className="w-5 text-vermelhoVibrante data-[top3=true]:text-dourado data-[top20=true]:text-black text-[16px] font-bold"
                  >
                    {index + 1}
                  </span>
                  <div className="w-10 h-10 relative">
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
                      className="absolute bottom-0 right-0 w-5 h-5 object-contain rounded-full border-2 border-cinzaClaro/50"
                      src={
                        "https://i.ibb.co/kJbxDT4/Whats-App-Image-2024-01-19-at-13-04-25.jpg"
                      }
                      width={1000}
                      height={1000}
                      alt=""
                    />
                  </div>
                  <span className="text-[10px] lg:text-[16px] max-w-[80px] lg:max-w-[200px]">
                    os cagaceiros do certão
                  </span>
                </div>

                <span className="text-[10px] lg:text-[16px]">1000</span>
              </div>
            ))}
        <div className="flex items-center justify-between gap-2  w-full h-5 px-5 bg-slate-500 rounded-b-lg"></div>
      </div>
    </div>
  );
}
