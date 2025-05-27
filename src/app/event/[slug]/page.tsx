import React from "react";
import Image from "next/image";
import H1 from "@/components/H1";
import { Metadata } from "next";
import { capitalize } from "@/utils/utils";
import { getEvent } from "@/utils/server-utils";
type EventPageProps = {
  params: { slug: string };
};

export async function generateMetadata({
  params,
}: EventPageProps): Promise<Metadata> {
  const slug = params.slug;
  const event = await getEvent(slug);

  return {
    title: `${capitalize(event.name)}`,
    description: `Details about ${capitalize(event.name)}`,
  };
}

export async function generateStaticParams() {
  //top events
  return [
    { slug: "comedy-extravaganza" },
    {
      slug: "dj-practice-session",
    },
  ];
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = params;
  const event = await getEvent(slug);
  return (
    <main>
      <section className="relative overflow-hidden flex justify-center items-center py-14 md:py-20">
        <Image
          alt={event.slug}
          src={event.imageUrl}
          fill
          quality={50}
          sizes="(max-width:1280px) 100vw,1280px"
          className="object-cover object-center blur-3xl z-0 "
          priority
        />
        <div
          id="infobox"
          className=" z-1 flex flex-col gap-6 lg:gap-16 lg:flex-row items-center relative"
        >
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className=" text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
              <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
                {event.name}
              </H1>
              Organised by <span className="italic">{event.organizerName}</span>
            </p>
            <button
              className="bg-white/20 text-lg capitalize bg-blur mt-5 lg:mt-auto  rounded-md border-white/10 border-2 sm:w-full py-2 state-effects
            "
            >
              Get tickets
            </button>
          </div>
        </div>
      </section>

      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section>
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return <section className="mb-12">{children}</section>;
}
function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-8">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="max-w-4xl mx-auto text-lg leading-8 text-white/75">
      {children}
    </p>
  );
}
