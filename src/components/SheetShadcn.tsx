"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function SheetsShadcn({
  botao,
  corpo,
}: Readonly<{
  botao: React.ReactNode;
  corpo: React.ReactNode;
}>) {
  return (
    <Sheet>
      <SheetTrigger>{botao}</SheetTrigger>
      <SheetContent className="bg-pretoCarvao" side={"left"}>
        <SheetHeader>
          <SheetDescription>
            <div className="py-10 w-full h-full">{corpo}</div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
