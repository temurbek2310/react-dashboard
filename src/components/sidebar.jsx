import {
  Bars3Icon,
  ChartBarIcon,
  ChatBubbleOvalLeftIcon,
  ClipboardDocumentIcon,
  DeviceTabletIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import { ShareIcon } from "@heroicons/react/24/outline";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import { cx } from "../utils";
import { NavLink } from "react-router";

const links = [
  { name: "List", icon: ListBulletIcon, path: "/" },
  { name: "Tree", icon: ShareIcon, path: "/tree" },
  { name: "Panel", icon: DeviceTabletIcon, path: "/panel" },
  { name: "Overlay", icon: ClipboardDocumentIcon, path: "/overlay" },
  { name: "Menu", icon: Bars3Icon, path: "/menu" },
  { name: "Message", icon: ChatBubbleOvalLeftIcon, path: "/message" },
  { name: "File", icon: DocumentIcon, path: "/file" },
  { name: "Chart", icon: ChartBarIcon, path: "/chart" },
];

export function Sidebar({ isOpen }) {
  return (
    <aside
      className={cx(
        "flex h-full max-h-full flex-col transition-all",
        isOpen
          ? "w-1/5 translate-x-0 duration-300 ease-linear"
          : "w-0 -translate-x-40 duration-200 ease-out",
      )}
    >
      <section className="flex max-h-16 items-center gap-2.5 bg-white px-5 py-2.5 shadow-sm">
        <img className="h-full" src="/logo.png" alt="sidebar header logo" />
        <h1 className="font-sans text-lg font-bold tracking-widest text-black">
          LOGO
        </h1>
      </section>
      <section className="box-border h-full min-h-max w-full scroll-px-4 px-4 py-5">
        <ul className="flex h-full flex-col items-center justify-start gap-3 rounded-lg bg-white p-4">
          {links.map((link) => (
            <li key={link.name} className="w-full">
              <NavLink
                className={({ isActive }) =>
                  cx(
                    "flex w-full cursor-pointer items-center justify-start gap-2 rounded-md px-2 py-1.5 hover:bg-gray-300",
                    isActive ? "bg-gray-300" : "",
                  )
                }
                to={link.path}
              >
                <link.icon className="h-5 w-5 text-black" />
                <p className="text-sm font-semibold text-black">{link.name}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
