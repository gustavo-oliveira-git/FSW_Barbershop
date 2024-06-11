import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Service } from "@prisma/client";
import Image from "next/image";

interface ServiceItemProps {
  service: Service;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <div className="pb-3">
      <Card>
        <CardContent className="p-3">
          <div className="flex gap-4 items-center">
            <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px]">
              <Image
                className="rounded-lg"
                src={service.imageUrl}
                alt="serviço"
                fill
                sizes="110px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="flex flex-col w-full">
                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold">{service.name}</h2>
                  <p className="text-xs text-gray-400 text">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-3  ">
                  <p className="text-primary font-bold text-sm">
                    {Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(Number(service.price))}
                  </p>
                  <Button className="bg-secondary">Reservar</Button>
                </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceItem;
