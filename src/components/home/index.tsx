import { Introduction } from "./introduction";
import { Experience } from "./experience";

function Home() {
  return (
    <div className="space-y-6">
      <Introduction />

      <Experience />
    </div>
  );
}

export { Home };
