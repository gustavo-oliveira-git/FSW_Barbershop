import { format } from "date-fns";
import Header from "./components/header";
import { ptBR } from "date-fns/locale";
import Search from "./components/search";
import BookingItem from "./components/booking-item";

export default function Home() {
  return (
    <main>
      <header>
        <section>
          <Header />
          <div className="pt-5 px-5">
            <h2 className="text-xl">
              Olá, <span className="font-bold">Gustavo</span>!
            </h2>
            <p className="capitalize text-sm">
              {format(new Date(), "EEEE',' dd 'de' LLLL", { locale: ptBR })}
            </p>
          </div>
        </section>
        <section>
          <div className="pt-5 px-5">
            <Search />
          </div>
        </section>
      </header>
      <section>
        <div className="pt-9 px-5">
          <h2 className="text-xs mb-3 font-bold text-gray-400 uppercase">Agendamentos</h2>
          <BookingItem />
        </div>
      </section>
    </main>
  );
}
