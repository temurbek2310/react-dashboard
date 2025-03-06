import React from "react";
import { flexRender } from "@tanstack/react-table";
import { cx } from "../utils";
import {
  ArrowLongDownIcon,
  ArrowLongUpIcon,
} from "@heroicons/react/24/outline";

export function Table({ table }) {
  return (
    <div className="size-full overflow-y-auto px-5">
      <table className="relative h-max max-h-full w-full table-auto border-collapse text-black">
        <thead className="sticky top-0 z-10 h-max bg-white">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <th className="p-5" key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <button
                        onClick={header.column.getToggleSortingHandler()}
                        className={cx(
                          "flex items-center gap-1.5",
                          header.column.getCanSort() && "cursor-pointer",
                        )}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {header.column.getCanSort() &&
                          ({
                            asc: <ArrowLongUpIcon className="size-5" />,
                            desc: <ArrowLongDownIcon className="size-5" />,
                          }[header.column.getIsSorted()] ?? (
                            <span className="flex -space-x-2.5">
                              <ArrowLongUpIcon className="size-5" />
                              <ArrowLongDownIcon className="size-5" />
                            </span>
                          ))}
                      </button>
                    )}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row, index) => {
            return (
              <tr
                key={row.id}
                className={cx(
                  "border-b border-gray-400 last:border-b-0",
                  index === 0 && "border-t-2 border-gray-400",
                )}
              >
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      key={cell.id}
                      className="p-5 font-semibold text-gray-600"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
