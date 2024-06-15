import Image from "next/image";

export default function Config() {
  return (
    <div className="flex flex-col items-center  bg-[#f3f3f3] w-full h-full min-h-[80vh]">
      <div className="w-[80%] py-10">
        <div className="flex justify-end gap-5 mb-10 ">
          <button className="h-12 w-[200px] bg-azulProdundo text-white rounded-sm hover:opacity-80">
            Nova Equipe
          </button>
        </div>
        <div className="flex flex-col gap-2 bg-white p-2 rounded-sm">
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item) => (
            <div className="flex items-center justify-between gap-10 w-full h-12 bg-cinzaClaro rounded-sm mt-5 px-2">
              <div className="flex justify-between">
                <div className="flex items-center gap-5">
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
              <div className="flex gap-5">
                <button className="h-12 w-[200px] bg-azulProdundo text-white rounded-sm hover:opacity-80">
                  Editar Equipe
                </button>
                <button className="h-12 w-[200px] bg-azulProdundo text-white rounded-sm hover:opacity-80">
                  Adicionar Pontos
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
