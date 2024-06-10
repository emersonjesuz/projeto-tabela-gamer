import logoImg from "@/assets/WhatsApp_Image_2024-01-19_at_13.04.25-removebg-preview.png";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";
import SheetsShadcn from "./SheetShadcn";
import Link from "next/link";
import { IoMdSettings } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";

export default function Header() {
  function corpoMenu() {
    return (
      <div className="flex flex-col gap-5 w-full h-full  mt-10 ">
        <Link
          href={"/"}
          className="flex items-center w-full h-12 border-l-2 border-l-dourado text-dourado uppercase pl-5"
        >
          <span className="font-roboto">Inicio</span>
        </Link>
        <Link
          href={"/TabelaEquipes"}
          className="flex items-center w-full h-12 border-l-2 border-l-dourado text-dourado uppercase pl-5"
        >
          <span className="font-roboto">EQUIPES</span>
        </Link>
        <Link
          href={"/"}
          className="flex items-center w-full h-12 border-l-2 border-l-dourado text-dourado uppercase pl-5"
        >
          <span className="font-roboto">MVP</span>
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
        <div className="flex items-center  h-full pt-5">
          <Image
            className="h-full w-full object-contain"
            src={logoImg}
            alt=""
          />
        </div>
        <div className="lg:hidden flex items-center justify-end w-[100px] h-full">
          <SheetsShadcn
            botao={<CiMenuFries className="h-8 w-8 fill-dourado " />}
            corpo={corpoMenu()}
          />
        </div>
        <div className="lg:flex hidden items-center justify-end gap-5 w-[50%]">
          <Link
            href={"/TabelaEquipes"}
            className="flex items-end  text-dourado uppercase "
          >
            <span className="font-roboto">EQUIPES</span>
          </Link>
          <Link
            href={"/"}
            className="flex items-center    text-dourado uppercase "
          >
            <span className="font-roboto">MVP</span>
          </Link>
          <Link href={"/"} className="flex items-center   ml-10">
            <IoHomeSharp className="fill-dourado w-8 h-8" />
          </Link>
          <Link
            href={"/"}
            className="flex items-center   gap-2  text-cinzaAzulado uppercase "
          >
            <IoMdSettings className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
}
