import { memo } from "react";
import NavBar from "./navBar";

const Header = memo(() => {
  return (
    <header className="max-w-4xl w-full mx-auto py-4 shadow-sm flex flex-col justify-start lg:border-r border-b items-start border-default px-10 lg:max-w-96">
      <h1 className="font-semibold text-3xl text-primary">Reyan Rahman</h1>

      <h3 className=" text-xl text-secondary mb-4">Frontend Engineer</h3>

      <NavBar />
    </header>
  );
});

export { Header };
