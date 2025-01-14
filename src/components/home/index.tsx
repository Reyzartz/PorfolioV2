import { Introduction } from "./introduction";
import { Experience } from "./experience";
import { Projects } from "./projects";

function Home() {
  return (
    <div className="space-y-6">
      <Introduction />
      <Experience />
      <Projects />
    </div>
  );
}

export { Home };
