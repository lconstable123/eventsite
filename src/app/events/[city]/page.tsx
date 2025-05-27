import React, { Suspense } from "react";
import { capitalize } from "@/utils/utils";
import H1 from "@/components/H1";

import EventsList from "@/components/eventsList";
import Loading from "./loading";
import { Metadata } from "next";
import { useSearchParams } from "next/navigation";
import { z } from "zod/v4";

type Props = {
  params: { city: string };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: EventsPageProps): Metadata {
  const city = params.city;
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
    description: `Find events in ${capitalize(city)}`,
  };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function City({ params, searchParams }: EventsPageProps) {
  const city = params.city;
  // const page = searchParams.page || "1";

  const parsedPage = pageNumberSchema.safeParse(searchParams.page);

  if (!parsedPage.success) {
    throw new Error("Invalid page number in search params");
  }

  return (
    <main className="flex flex-col items-center py-24  overflow-hidden">
      <H1 className="mb-28">
        {city === "all" && "All Events"}
        {city !== "all" && capitalize(city)}
      </H1>
      <Suspense key={city + parsedPage} fallback={<Loading />}>
        <EventsList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
