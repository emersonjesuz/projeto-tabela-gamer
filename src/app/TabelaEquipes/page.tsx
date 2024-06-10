import Tabela from "@/components/Tabela";

export default function TabelaEquipes() {
  return (
    <div className="bg-[#f3f3f3] w-full h-full min-h-screen">
      <Tabela tipo="equipe" dados={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]} />
    </div>
  );
}
