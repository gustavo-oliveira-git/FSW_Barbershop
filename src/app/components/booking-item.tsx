import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const BookingItem = () => {
  return (
    <Card>
      <CardContent className="p-3 flex justify-between items-center">
        {/* Content */}
        <div className="flex flex-col gap-2">
          <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">
            Confirmado
          </Badge>

          <h2 className="font-bold">Corte de Cabelo</h2>

          <div className="flex gap-2 items-center">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            Vintage Barber
          </div>
        </div>
        {/* Date */}
        <div className="flex flex-col items-center justify-center border-l border-solid pl-8">
            <p className="text-sm">
                Fevereiro
            </p>
            <p className="font-bold text-2xl">
                06
            </p>
            <p className="text-sm">09:45</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingItem;
