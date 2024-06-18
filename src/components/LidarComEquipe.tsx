import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import NovaEquipe from "./Equipe";

export function LidarComEquipe({
  children,
  tipo,
  id,
  buttonClassName,
}: Readonly<{
  children: React.ReactNode;
  tipo: "novaEquipe" | "editarEquipe" | "adicionarPontos";
  id?: string;
  buttonClassName: string;
}>) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={buttonClassName}>{children}</button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        {tipo === "novaEquipe" ? (
          <NovaEquipe />
        ) : tipo === "editarEquipe" ? (
          <NovaEquipe />
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
