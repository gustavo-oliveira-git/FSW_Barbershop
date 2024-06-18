"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import {
  CalendarDays,
  Home,
  LogInIcon,
  LogOutIcon,
  MenuIcon,
  UserCircle,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const Header = () => {
  const { data, status } = useSession();
  const login = () => signIn("google");
  const logout = () => signOut();
  return (
    <Card className="rounded-none">
      <CardContent className="flex flex-row p-5 justify-between items-center">
        <Image
          className="h-6 w-32"
          src={"/logo.png"}
          alt="FSW Barber"
          height={22}
          width={120}
          priority
        />
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
            <SheetHeader>
              <SheetTitle className="text-left border-b border-solid border-secondary p-5">
                Menu
              </SheetTitle>
              <SheetDescription>
                <section>
                  {data?.user ? (
                    <div className="flex justify-between px-5 py-6 items-center">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage src={data.user?.image ?? ""} />
                        </Avatar>
                        <h2 className="font-bold">{data.user.name}</h2>
                      </div>
                      <Button
                        variant={"secondary"}
                        size={"icon"}
                        onClick={logout}
                      >
                        <LogOutIcon size={16} />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col px-5 py-6 gap-3">
                      <div className="flex items-center gap-2">
                        <UserCircle size={33} />
                        <h2 className="font-bold">Olá. Faça seu login!</h2>
                      </div>
                      <Button
                        variant={"secondary"}
                        size={"icon"}
                        className="w-full justify-start"
                        onClick={login}
                      >
                        <LogInIcon size={18} onClick={login} className="mx-2" />{" "}
                        Fazer login
                      </Button>
                    </div>
                  )}
                  <div className="flex flex-col px-5 py-6 gap-3">
                    <Button variant={"outline"} className="justify-start" asChild>
                      <Link href={"/"}>
                        <Home size={18} className="mr-2"/> Inicio
                      </Link>
                    </Button>
                    {data?.user && (
                      <Button variant={"outline"} className="justify-start">
                        <CalendarDays size={18} className="mr-2"/> Agendamentos
                      </Button>
                    )}
                  </div>
                </section>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  );
};

export default Header;
