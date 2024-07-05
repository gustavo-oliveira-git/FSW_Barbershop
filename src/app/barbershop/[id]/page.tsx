import { db } from "@/app/lib/prisma";
import BarbershopInfo from "../components/barbershop-info";
import ServiceItem from "../components/service-item";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

interface BarbershopDetailsProps {
  params: any;
}

const BarbershopDetails = async ({ params }: BarbershopDetailsProps) => {

  const session = await getServerSession(authOptions)

  if (!params.id) {
    //TODO return to home page
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return null;
  }
  return (
    <main>
      <div>
        <BarbershopInfo barbershop={barbershop} />
      </div>
      <div className="px-5 pt-6 pb-6">
        {barbershop.services.map((service) => (
          <ServiceItem key={service.id} barbershop={barbershop} service={service} isAuthenticated={!!session?.user}/>
        ))}
      </div>
    </main>
  );
};

export default BarbershopDetails;
