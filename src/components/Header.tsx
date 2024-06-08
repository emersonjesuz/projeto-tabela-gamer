import logoImg from "@/assets/WhatsApp_Image_2024-01-19_at_13.04.25-removebg-preview.png";
import Image from "next/image";
import { CiMenuFries } from "react-icons/ci";

export default function Header() {
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
          <CiMenuFries className="h-8 w-8 fill-dourado " />
        </div>
      </div>
    </div>
  );
}
