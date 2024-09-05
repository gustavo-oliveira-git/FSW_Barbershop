"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SideMenu from "./side-menu";
import Link from "next/link";

const Header = () => {
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row p-5 justify-between items-center">
        <Link href={'/'}>
          <Image
            className="h-6 w-32"
          
            src={"/logo.png"}
            alt="FSW Barber"
            height={22}
            width={120}
            priority
          />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant={"outline"}
              size={"icon"}
              className="border-none h-8 w-8"
            >
              <MenuIcon size={16} />
            </Button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
