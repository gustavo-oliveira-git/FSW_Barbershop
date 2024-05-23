import { format } from "date-fns";
import Header from "./components/header";
import { ptBR } from "date-fns/locale";

export default function Home() {
  return (
    <main>
      <header>
        <div>
          <Header />
          <div className="py-6 px-5">
            <h2 className="text-xl">Olá, <span className="font-bold">Gustavo</span>!</h2>
            <p className="capitalize text-sm">
              {format(new Date(), "EEEE',' dd 'de' LLLL", {locale: ptBR})}
            </p>
          </div>
        </div>
      </header>

    </main>
  );
}
