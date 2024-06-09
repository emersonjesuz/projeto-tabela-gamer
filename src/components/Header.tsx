import logoImg from "@/assets/WhatsApp_Image_2024-01-19_at_13.04.25-removebg-preview.png";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import SheetsShadcn from "./SheetShadcn";
import Link from "next/link";
import { IoMdSettings } from "react-icons/io";

export default function Header() {
  function corpoMenu() {
    return (
      <div className="flex flex-col gap-5 w-full h-full  mt-10 ">
        <Link
          href={"/"}
          className="flex items-center w-full h-12 border-l-2 border-l-dourado text-dourado uppercase pl-5"
        >
          <span className="font-roboto">Tabela EQUIPES</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center w-full h-12 border-l-2 border-l-dourado text-dourado uppercase pl-5"
        >
          <span className="font-roboto">Tabela MVP</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center w-full h-12 gap-2 text-cinzaAzulado uppercase "
        >
          <IoMdSettings className="w-5 h-5" />
          <span>Configurações</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-[100px] bg-pretoCarvao">
      <div className="flex items-center justify-between w-[80%] h-full">
        <div className="flex items-center w-[100px] h-full py-1">
          <Image
            className="h-full w-full object-contain"
            src={logoImg}
            alt=""
          />
        </div>
        <div className="flex items-center justify-end w-[100px] h-full">
          <SheetsShadcn
            botao={<CiMenuFries className="h-8 w-8 fill-dourado " />}
            corpo={corpoMenu()}
          />
        </div>
      </div>
    </div>
  );
}
