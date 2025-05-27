"use client";
import React, { useRef } from "react";
import { EventoEvent } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const MotionLink = motion(Link);

export default function EventCard({ event }: { event: EventoEvent }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <MotionLink
      ref={ref}
      className="flex flex-col h-[380px] flex-1 basis-80 max-w-[500px]  "
      href={`/event/${event.slug}`}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
    >
      <section className=" bg-white/[3%] w-full h-full  rounded-xl overflow-hidden relative hover:scale-105 active:scale-[1.02] transition">
        <Image
          src={event.imageUrl}
          alt={event.name}
          width={500}
          height={280}
          className="h-[60%] object-cover"
        />
        <div className="flex flex-col  flex-1 justify-center items-center ">
          <h2 className="text-2xl font-semibold ">{event.name}</h2>
          <p className="italic text-white/75">By {event.organizerName}</p>
          <p className="text-sm text-white/50 mt-4">{event.location}</p>
        </div>
        <section className="absolute flex justify-center items-center flex-col left-[12px] top-[12px] h-[45px] w-[45px] bg-black/50 rounded-md">
          <p className="text-xl font-bold -mb-[5px]">
            {new Date(event.date).getDate().toString().padStart(2, "0")}
          </p>

          <p className="text-xs uppercase text-accent">
            {new Date(event.date).toLocaleString("default", {
              month: "short",
            })}
          </p>
        </section>
      </section>
    </MotionLink>
  );
}
