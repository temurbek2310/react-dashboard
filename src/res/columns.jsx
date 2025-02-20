import {
  ArrowLongUpIcon,
  ArrowLongDownIcon,
  PencilIcon,
  TrashIcon,
  StarIcon as StarOutlineIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Checkbox } from "../components/checkbox";
import { StarIcon as StarSolidIcon } from "@heroicons/react/24/solid";
import { cx } from "../utils";

const home = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  {
    header: "Code",
    accessorKey: "code",
  },
  {
    header: "Name",
    accessorKey: "name",
  },
  {
    header: "Image",
    accessorKey: "image",
    enableSorting: false,
    cell: ({ row }) => (
      <img
        src={row.original.image}
        alt={row.original.name}
        className="h-14 w-20"
      />
    ),
  },
  {
    header: "Price",
    accessorKey: "price",
    cell: ({ row }) => (
      <p className="font-semi text-base text-black">${row.original.price}</p>
    ),
  },
  {
    header: "Category",
    accessorKey: "category",
  },
  {
    header: "Reviews",
    accessorKey: "rating",
    cell: ({ row }) => {
      const ratedStars = Math.ceil(row.original.rating);
      const stars = Array.from({ length: 5 }, (_, i) => (
        <>
          {i + 1 < ratedStars ? (
            <StarSolidIcon className="size-4 text-blue-400" />
          ) : (
            <StarOutlineIcon className="size-4 text-red-400" />
          )}
        </>
      ));

      return (
        <p className="flex items-center gap-2">
          {stars.map((star, i) => (
            <span key={i}>{star}</span>
          ))}
        </p>
      );
    },
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => {
      const status = {
        lowstock: "px-1 py-0.5 rounded-xs bg-yellow-300 text-yellow-700",
        instock: "px-1 py-0.5 rounded-xs bg-orange-300 text-orange-700",
      };

      return (
        <p
          className={cx(
            status[row.original.status],
            "w-max rounded-sm text-sm font-semibold uppercase",
          )}
        >
          {row.original.status}
        </p>
      );
    },
  },
  {
    id: "action",
    cell: ({ row }) => {
      return (
        <section className="flex gap-2">
          <button className="flex size-7 items-center justify-center rounded-full bg-green-400 text-white">
            <PencilIcon className="size-5" />
          </button>
          <button className="flex size-7 items-center justify-center rounded-full bg-yellow-400 text-orange-700">
            <TrashIcon className="size-5" />
          </button>
        </section>
      );
    },
  },
];

export { home };
