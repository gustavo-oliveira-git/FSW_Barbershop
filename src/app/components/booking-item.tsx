import { Prisma } from "@prisma/client";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { format, isFuture } from "date-fns";
import { ptBR } from "date-fns/locale";

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: true;
      barbershop: true;
    };
  }>;
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const isBookingConfirmed = isFuture(booking.date);
  return (
    <Card className="min-w-full pr-5">
      <CardContent className="py-0 px-0 flex items-center">
        {/* Content */}
        <div className="flex flex-col gap-2 py-5 pl-5 flex-[3]">
          <Badge
            variant={isBookingConfirmed ? "default" : "secondary"}
            className="w-fit"
          >
            {isBookingConfirmed ? "Confirmado" : "Finalizado"}
          </Badge>

          <h2 className="font-bold">{booking.service.name}</h2>

          <div className="flex gap-2 items-center">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <h3>{booking.barbershop.name}</h3>
          </div>
        </div>
        {/* Date */}
        <div className="flex flex-col items-center justify-center border-l flex-1 border-solid pl-8">
          <p className="text-sm capitalize">
            {format(booking.date, "MMMM", {
              locale: ptBR,
            })}
          </p>
          <p className="font-bold text-2xl">{format(booking.date, "dd")}</p>
          <p className="text-sm">{format(booking.date, "hh:mm")}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
