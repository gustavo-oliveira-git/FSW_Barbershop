"use server";

import { db } from "@/app/lib/prisma";

interface SaveBookingParams {
  barbershopId: string;
  serviceId: string;
  userId: string;
  date: Date;
}

export const saveBooking = async (params: SaveBookingParams) => {
  await db.booking.create({
    data: {
      serviceId: params.serviceId,
      barbershopId: params.barbershopId,
      userId: params.userId,
      date: params.date,
    },
  });
};
