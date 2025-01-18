import { memo } from "react";
import { ContactLinks } from "./contactLinks";

const SideBar = memo(() => {
  return (
    <header className="shadow-sm flex flex-col justify-start lg:border-r border-b lg:border-b-0 items-end border-default lg:min-w-80">
      <div className="max-w-4xl px-6 lg:px-10 w-full mx-auto py-4 lg:py-7">
        <h1 className="font-semibold text-2xl text-primary">Reyan Rahman</h1>

        <h3 className="text-lg text-secondary mb-4">Frontend Engineer</h3>

        <ContactLinks />
      </div>
    </header>
  );
});

export { SideBar };
