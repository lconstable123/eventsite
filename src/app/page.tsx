import Searchform from "@/components/search-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <h1 className="text-3xl lg:text-6xl font-bold tracking-tight">
        FInd events around you
      </h1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacity-75">
        Browse more than{" "}
        <span className="font-bold italic text-accent">100k</span> events around
        you.
      </p>

      <Searchform />
      <section className="mt-4 flex gap-x-4 text-sm text-white/50 font-semibold">
        <p>Popular</p>
        <div className="space-x-4">
          <Link href="/events/Austin">Austin</Link>
          <Link href="/events/Seattle">Seattle</Link>
        </div>
      </section>
    </main>
  );
}
