import { memo } from "react";
import NavBar from "./navBar";

const Header = memo(() => {
  return (
    <header className="w-full px-6  py-4 shadow-sm flex justify-between border-b items-center border-default">
      <h1 className="font-semibold text-xl text-primary">Reyan Rahman</h1>

      <NavBar />
    </header>
  );
});

export { Header };
