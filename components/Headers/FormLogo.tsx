import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function FormLogo() {
  return (
    <Link
      href="/"
      className="flex items-center justify-center mb-8 text-2xl font-semibold lg:mb-10 dark:text-white"
    >
      <Image
        className="mr-4 h-11"
        src="/logo.svg"
        alt="FlowBite Logo"
        width={32}
        height={32}
      />
      <span>Flowbite</span>
    </Link>
  );
}
