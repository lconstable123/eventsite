import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col mx-auto max-w-7xl min-h-screen bg-white/[2%] ">
      {children}
    </div>
  );
}
