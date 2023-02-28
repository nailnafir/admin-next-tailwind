import React from "react";
import Link from "next/link";

interface SubMenuItemProps {
  href: string;
  title: string;
}

export default function SubMenuItem(props: SubMenuItemProps) {
  const { href, title } = props;
  return (
    <li>
      <Link
        href={href}
        className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
      >
        {title}
      </Link>
    </li>
  );
}
