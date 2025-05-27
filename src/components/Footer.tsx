import Link from "next/link";
import React from "react";

const routes = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-gray-500 text-xs">
        &copy; 2050 ByeGrad. All rights reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-8">
        {routes.map((route) => (
          <li key={route.path} className="text-gray-500">
            <Link href={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
