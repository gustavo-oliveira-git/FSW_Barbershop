import { format } from "date-fns";
import Header from "./components/header";
import { ptBR } from "date-fns/locale";
import Search from "./components/search";
import BookingItem from "./components/booking-item";
import { db } from "./lib/prisma";
import BarbershopItem from "./components/barbershop-item";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  //Calling prisma db abd render barbershops
  const session = await getServerSession(authOptions);

  const [barbershops, confirmedBookings] = await Promise.all([
    db.barbershop.findMany({}),
    session?.user
      ? db.booking.findMany({
          where: {
            userId: (session.user as any).id,
            date: {
              gte: new Date(),
            },
          },
          include: {
            service: true,
            barbershop: true,
          },
        })
      : Promise.resolve([]),
  ]);

  return (
    <main>
      <header>
        <section>
          <Header />
          <div className="mt-5 px-5">
            <h2 className="text-xl">
              Olá, <span className="font-bold">Gustavo</span>!
            </h2>
            <p className="capitalize text-sm">
              {format(new Date(), "EEEE',' dd 'de' LLLL", { locale: ptBR })}
            </p>
          </div>
        </section>
        <section>
          <div className="mt-5 px-5">
            <Search />
          </div>
        </section>
      </header>
      <section>
        <div className="mt-9 px-5">
          <h2 className="text-xs mb-3 font-bold text-gray-400 uppercase">
            Agendamentos
          </h2>

          <div className="flex gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {confirmedBookings.map((booking) => (
              <BookingItem key={booking.id} booking={booking} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="mt-9">
          <h2 className="text-xs px-5 mb-3 font-bold text-gray-400 uppercase">
            Recomendados
          </h2>
          <div className="flex px-5 gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="mt-9 mb-[4.5rem]">
          <h2 className="text-xs px-5 mb-3 font-bold text-gray-400 uppercase">
            Populares
          </h2>
          <div className="flex px-5 gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
