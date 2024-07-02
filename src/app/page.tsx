import Animacao from "@/components/Animacao";
import Top3Equipes from "@/components/Top3Equipes";
import Top3Jogadores from "@/components/Top3Jogadores";

export default function Home() {
  return (
    <Animacao>
      <main className="flex  flex-col items-center  w-full   pt-5 px-2 bg-[#f2f2f2]">
        <div className="flex  flex-col items-center p-2 lg:py-10 w-full rounded-t-2xl  bg-pretoCarvao">
          <div className="flex flex-col  gap-10 w-full lg:w-[80%]">
            <Top3Equipes
              equipes={[1, 2, 3]}
              link="/TabelaEquipes"
              titulo="Melhores Equipes da rodada"
            />
            <Top3Jogadores
              equipes={[1, 2, 3]}
              link="/TabelaJogadores"
              titulo="Melhores Jogadores da rodada"
            />
          </div>
        </div>
      </main>
    </Animacao>
  );
}
