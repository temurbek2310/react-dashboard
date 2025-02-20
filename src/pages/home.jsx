import { useState } from "react";
import "../styles/App.css";
import { Sidebar } from "../components/sidebar";
import {
  Bars3Icon,
  CalendarIcon,
  Cog6ToothIcon,
  PlusIcon,
  UserIcon,
  TrashIcon,
  MagnifyingGlassIcon as SearchIcon,
  ArrowUpOnSquareIcon,
} from "@heroicons/react/24/outline";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Button } from "../components/button";
import { Table } from "../components/table";
import React from "react";
import { home } from "../res/columns";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const mockData = [
    {
      code: "P001",
      name: "Product One",
      image: "https://placehold.co/150",
      price: 25.99,
      category: "Electronics",
      rating: 4.5,
      status: "instock",
    },
    {
      code: "P002",
      name: "Product Two",
      image: "https://placehold.co/150",
      price: 15.49,
      category: "Furniture",
      rating: 3.2,
      status: "lowstock",
    },
    {
      code: "P003",
      name: "Product Three",
      image: "https://placehold.co/150",
      price: 45.0,
      category: "Apparel",
      rating: 4.8,
      status: "instock",
    },
    {
      code: "P004",
      name: "Product Four",
      image: "https://placehold.co/150",
      price: 12.75,
      category: "Sports",
      rating: 2.5,
      status: "lowstock",
    },
    {
      code: "P005",
      name: "Product Five",
      image: "https://placehold.co/150",
      price: 99.99,
      category: "Home Appliances",
      rating: 4.0,
      status: "instock",
    },
    {
      code: "P006",
      name: "Product Six",
      image: "https://placehold.co/150",
      price: 5.99,
      category: "Books",
      rating: 3.8,
      status: "lowstock",
    },
    {
      code: "P007",
      name: "Product Seven",
      image: "https://placehold.co/150",
      price: 55.5,
      category: "Toys",
      rating: 4.2,
      status: "instock",
    },
    {
      code: "P008",
      name: "Product Eight",
      image: "https://placehold.co/150",
      price: 10.25,
      category: "Office Supplies",
      rating: 4.7,
      status: "lowstock",
    },
  ];

  const [data, setData] = React.useState(mockData);
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState([]);

  // const [rowSelection, setRowSelection] = React.useState({});
  const [sorting, setSorting] = React.useState([]);

  const table = useReactTable({
    data,
    columns: home,
    state: {
      rowSelection: selected,
      sorting,
    },
    enableRowSelection: true, //enable row selection for all rows
    // enableRowSelection: row => row.original.age > 18, // or enable row selection conditionally per row
    onRowSelectionChange: setSelected,
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  // React.useEffect(() => {
  //   if (rest?.setRowSelection) rest?.setRowSelection(rowSelection);
  // }, [rowSelection]);

  React.useEffect(() => {
    setData(
      mockData.filter((item) => {
        const loweredName = item.name.toLowerCase();
        const loweredSearch = search.toLowerCase();
        return (
          loweredName.startsWith(loweredSearch) ||
          loweredName.includes(loweredSearch)
        );
        }),
      );
  }, [search]);

  // console.log({ selected });

  return (
    <div className="flex h-full max-h-dvh w-full flex-row items-start justify-start border bg-gray-300">
      <Sidebar isOpen={isOpen} />
      <div className="flex h-full w-full flex-col">
        <header className="flex min-h-16 w-full items-center bg-white px-5 shadow-sm">
          <button type="button" onClick={() => setIsOpen(!isOpen)}>
            <Bars3Icon className="h-6 w-6 text-black" />
          </button>
          <section className="ml-auto flex gap-10">
            <CalendarIcon className="h-6 w-6 text-black" />
            <Cog6ToothIcon className="h-6 w-6 text-black" />
            <UserIcon className="h-6 w-6 text-black" />
          </section>
        </header>
        <div className="flex h-full w-full overflow-y-auto px-6 py-4">
          <div className="flex size-full flex-col gap-[18px] rounded-3xl bg-white p-[18px] shadow-md">
            {/* Action Buttons */}
            <section className="flex w-full gap-2.5 rounded-md border border-gray-400 bg-gray-300 px-[18px] py-5">
              <span className="flex gap-2.5">
                <Button size="lg" variant="success">
                  <PlusIcon className="h-6 w-6" />
                  New
                </Button>
                <Button size="lg" variant="danger">
                  <TrashIcon className="h-6 w-6" />
                  Delete
                </Button>
              </span>
              <span className="ml-auto flex gap-2.5">
                <Button size="lg" variant="info">
                  <PlusIcon className="h-6 w-6" />
                  Import
                </Button>
                <Button size="lg" variant="indigo">
                  <ArrowUpOnSquareIcon className="h-6 w-6" />
                  Export
                </Button>
              </span>
            </section>

            {/* Table header and Table itself */}
            <div className="flex size-full flex-col overflow-hidden">
              <section className="flex items-center justify-between border-y border-gray-400 bg-gray-300 p-5">
                <h1 className="text-2xl font-bold text-black">
                  Manage Products
                </h1>
                <label
                  htmlFor="search-product"
                  className="flex w-max gap-2.5 rounded-md bg-white p-2 ring-1 ring-gray-400 focus-within:ring-2 focus-within:ring-blue-500"
                >
                  <SearchIcon className="size-7 text-black" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    id="search-product"
                    type="text"
                    placeholder="Search..."
                    className="rounded-md bg-transparent text-black outline-none ring-0 placeholder:text-gray-500"
                  />
                </label>
              </section>
              <Table columns={home} table={table} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
