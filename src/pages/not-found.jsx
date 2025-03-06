import { NavLink } from "react-router";

export function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-white text-black">
      <h1 className="bg-sky-400 font-mono text-3xl font-bold">
        Hey bro,this not-found page welcome
      </h1>
      <NavLink
        to={"/"}
        className={"text-2xl font-semibold text-black underline"}
      >
        Go Back
      </NavLink>
    </div>
  );
}
