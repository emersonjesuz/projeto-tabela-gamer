import Tabela from "@/components/Tabela";

export default function TabelaJogadores() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#f3f3f3] w-full h-full min-h-[50vh]">
      <h1 className="text-3xl mt-10 mb-2">Melhores Jogadores</h1>
      <Tabela
        tipo="jogador"
        dados={[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
          11, 12,
        ]}
      />
    </div>
  );
}
