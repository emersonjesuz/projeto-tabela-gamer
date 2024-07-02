import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import NovaEquipe from "./Equipe";
import EditarEquipe from "./EditarEquipe";
import EditarJogador from "./EditarJogador";
import AdicionarPontos from "./AdicionarPontos";

export function LidarComEquipe({
  children,
  tipo,
  id,
  buttonClassName,
}: Readonly<{
  children: React.ReactNode;
  tipo: "novaEquipe" | "editarEquipe" | "adicionarPontos" | "editarJogador";
  id?: string;
  buttonClassName: string;
}>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={buttonClassName}>{children}</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] px-3">
        {tipo === "novaEquipe" ? (
          <NovaEquipe />
        ) : tipo === "editarEquipe" ? (
          <EditarEquipe id={id} />
        ) : tipo === "adicionarPontos" ? (
          <AdicionarPontos id={id} />
        ) : tipo === "editarJogador" ? (
          <EditarJogador id={id} />
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
