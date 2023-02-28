import React from "react";
import Link from "next/link";

interface ApplicationMenuItemProps {
  title: string;
  children: React.ReactNode;
}

export default function ApplicationMenuItem(props: ApplicationMenuItemProps) {
  const { title, children } = props;
  return (
    <Link
      href="#"
      className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600"
    >
      {children}
      <div className="text-sm font-medium text-gray-900 dark:text-white">
        {title}
      </div>
    </Link>
  );
}
