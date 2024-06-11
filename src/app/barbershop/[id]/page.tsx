import { db } from "@/app/lib/prisma";
import BarbershopInfo from "../components/barbershop-info";
import ServiceItem from "../components/service-item";

interface BarbershopDetailsProps {
  params: any;
}

const BarbershopDetails = async ({ params }: BarbershopDetailsProps) => {
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
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </main>
  );
};

export default BarbershopDetails;
