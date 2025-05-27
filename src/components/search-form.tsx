"use client";
import { fetchEvents } from "@/utils/server-utils";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Searchform() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();
  const events = fetchEvents("n", 2);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText.trim()) return;

    const encoded = encodeURIComponent(searchText.trim());
    router.push(`/events/${encoded}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-[580px]">
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full h-16 rounded-lg bg-white/[7%] px-6 outline-none ring-accent/50 transition focus:ring-2 focus:bg-white/10"
        type="text"
        placeholder="Search for events in any city..."
        spellCheck={false}
      />
    </form>
  );
}
