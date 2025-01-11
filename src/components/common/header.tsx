import { memo } from "react";
import NavBar from "./navBar";

const Header = memo(() => {
  return (
    <header className="w-full py-4 shadow-sm flex flex-col justify-center border-r items-end border-default p-10 max-w-96">
      <h1 className="font-semibold text-2xl text-primary">Reyan Rahman</h1>
      <h3 className=" text-lg text-secondary mb-2">Product Engineer</h3>

      <NavBar />
    </header>
  );
});

export { Header };
