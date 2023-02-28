import React from "react";
import Link from "next/link";

interface ProfileMenuProps {
  title: string;
  href: string;
}

export default function ProfileMenuItem(props: ProfileMenuProps) {
  const { href, title } = props;
  return (
    <li>
      <Link
        href={href}
        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
        role="menuitem"
      >
        {title}
      </Link>
    </li>
  );
}
