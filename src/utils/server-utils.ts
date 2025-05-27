// import "server-only";
import { unstable_cache } from "next/cache";
import { capitalize } from "./utils";
import { notFound } from "next/navigation";
import prisma from "@/lib/db";
import { EventoEvent } from "@prisma/client";

export async function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const fetchEvents = unstable_cache(async (city: string, page = 1) => {
  const events = (await prisma.eventoEvent.findMany({
    where: { city: city === "all" ? {} : capitalize(city) },
    orderBy: { date: "asc" },
    take: 6,
    skip: (page - 1) * 6,
  })) as EventoEvent[];

  const totalCount = await prisma.eventoEvent.count({
    where: { city: city === "all" ? {} : capitalize(city) },
  });

  return { events, totalCount };
});

export const getEvent = unstable_cache(
  async (slug: string): Promise<EventoEvent> => {
    const event = (await prisma.eventoEvent.findUnique({
      where: { slug: slug },
    })) as EventoEvent;

    if (!event) {
      return notFound();
    }

    return event;
  }
);
