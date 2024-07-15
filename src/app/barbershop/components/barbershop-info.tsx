"use client";

import SideMenu from "@/app/components/side-menu";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import { Barbershop } from "@prisma/client";
import { ChevronLeftIcon, MapPin, MenuIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  const router = useRouter();

  const handleBack = () => {
    router.replace("/");
  };
  return (
    <>
      <section className="pb-6 border-b-2 border-solid border-secondary">
        <div className="h-[250px] w-full relative">
          <Button
            onClick={handleBack}
            size={"icon"}
            variant={"outline"}
            className="absolute z-50 top-6 left-6"
          >
            <ChevronLeftIcon size={18} />
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant={"outline"}
                size={"icon"}
                className="absolute z-50 top-6 right-6"
              >
                <MenuIcon size={16} />
              </Button>
            </SheetTrigger>
            <SheetContent className="p-0">
              <SideMenu />
            </SheetContent>
          </Sheet>
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            fill
            style={{
              objectFit: "cover",
            }}
            priority
          />
        </div>
        <div className="pt-3 px-5">
          <h2 className="font-bold text-xl">{barbershop.name}</h2>
          <div className="flex items-center gap-2 text-sm mt-2">
            <MapPin size={16} className="text-primary" />
            {barbershop.address}
          </div>
          <div className="flex items-center gap-2 text-sm mt-2">
            <StarIcon size={16} className="text-primary fill-primary" />{" "}
            <span>5,0 (0 Avaliações)</span>
          </div>
        </div>
      </section>
      <section className="pt-6 px-5">
        <div className="flex gap-3">
          <Button className="">Serviços</Button>
          <Button className="bg-secondary">Informações</Button>
        </div>
      </section>
    </>
  );
};

export default BarbershopInfo;
