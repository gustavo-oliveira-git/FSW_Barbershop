`use client`;

import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import {
  LogOutIcon,
  UserCircle,
  LogInIcon,
  Home,
  CalendarDays,
} from "lucide-react";
import { Button } from "./ui/button";
import { SheetHeader, SheetTitle, SheetDescription } from "./ui/sheet";
import { useSession, signIn, signOut } from "next-auth/react";

const SideMenu = () => {
  const { data } = useSession();
  const login = () => signIn("google");
  const logout = () => signOut();
  return (
    <>
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
                <Button variant={"secondary"} size={"icon"} onClick={logout}>
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
                  <LogInIcon size={18} onClick={login} className="mx-2" /> Fazer
                  login
                </Button>
              </div>
            )}
            <div className="flex flex-col px-5 py-6 gap-3">
              <Button variant={"outline"} className="justify-start" asChild>
                <Link href={"/"}>
                  <Home size={18} className="mr-2" /> Inicio
                </Link>
              </Button>
              {data?.user && (
                <Button variant={"outline"} className="justify-start">
                  <CalendarDays size={18} className="mr-2" /> Agendamentos
                </Button>
              )}
            </div>
          </section>
        </SheetDescription>
      </SheetHeader>
    </>
  );
};

export default SideMenu;
