import logoImg from "@/assets/WhatsApp_Image_2024-01-19_at_13.04.25-removebg-preview.png";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="flex items-center justify-center w-full h-[200px] bg-pretoCarvao">
      <div className="flex items-center w-[150px] h-full py-1">
        <Image className="h-full w-full object-contain" src={logoImg} alt="" />
      </div>
    </div>
  );
}
