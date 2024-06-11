"use client"

import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Barbershop } from "@prisma/client";
import { Button } from "./ui/button";
import { StarIcon } from "lucide-react";
import { useRouter } from "next/navigation";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  const router = useRouter();

  const handleBooking = () => {
    router.push(`/barbershop/${barbershop.id}`);
  };
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="p-0">
        <div className="relative">
          <div className="absolute flex items-center top-2 left-2 z-50">
            <Badge
              className="top-3 left-3 gap-1 opacity-90"
              variant={"secondary"}
            >
              <StarIcon size={12} className="text-primary fill-primary" />
              <span className="text-xs font-normal">5,0</span>
            </Badge>
          </div>
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            height={0}
            width={0}
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
            className="h-[159px] w-full rounded-t-2xl"
          />
        </div>
        <div className="p-2">
          <h2 className="font-bold text-base overflow-hidden text-ellipsis text-nowrap mt-2">
            {barbershop.name}
          </h2>
          <p className="text-xs text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button variant={"secondary"} className="w-full mt-4" onClick={handleBooking}>
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BarbershopItem;
