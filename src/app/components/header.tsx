import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row p-5 justify-between items-center">
        <Image src={"/logo.png"} alt="FSW Barber" height={22} width={120} priority/>
        <Button variant={"outline"} size={"icon"} className="border-none h-8 w-8">
          <MenuIcon size={16} />
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
