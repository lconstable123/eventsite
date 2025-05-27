import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="w-20 h-10 relative bg-accent rounded-lg"></div>
      {/* <Image
        src="https://bytegrad.com/course-assets/react-nextjs/eventto.png"
        alt="Evento logo"
        width={53}
        height={12}
      /> */}
    </Link>
  );
}
