import React from "react";

interface TableHeadRowItemProps {
  title: string;
}

export default function TableHeadRowItem(props: TableHeadRowItemProps) {
  const { title } = props;
  return (
    <th
      scope="col"
      className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
    >
      {title}
    </th>
  );
}
