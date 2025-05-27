import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type PaginationProps = {
  previousPath: string;
  nextPath: string;
};
const btnStyles =
  "flex items-center gap-x-2 hover:opacity-100 transition text-xs text-white px-5 py-3 bg-white/5 rounded-md opacity-75";

export default function PaginationControls({
  previousPath,
  nextPath,
}: PaginationProps) {
  return (
    <section className="flex justify-between w-full">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon className="inline-block mr-2" />
        </Link>
      ) : (
        <div />
      )}
      {nextPath ? (
        <Link href={nextPath} className={btnStyles}>
          <ArrowRightIcon className="inline-block mr-2" />
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
}
