import { memo } from "react";
import { ContactLinks } from "./contactLinks";

const Header = memo(() => {
  return (
    <header className="shadow-sm flex flex-col justify-start lg:border-r lg:border-b-0 border-b items-start border-default lg:min-w-96">
      <div className="max-w-4xl px-6 lg:px-10 w-full mx-auto py-4">
        <h1 className="font-semibold text-3xl text-primary">Reyan Rahman</h1>

        <h3 className=" text-xl text-secondary mb-4">Frontend Engineer</h3>

        <ContactLinks />
      </div>
    </header>
  );
});

export { Header };
