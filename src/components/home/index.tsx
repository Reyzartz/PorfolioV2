import { Introduction } from "./introduction";
import { Projects } from "./projects";
import { Contact } from "./contact";

function Home() {
  return (
    <div className="space-y-8">
      <Introduction />
      <Projects />
      <Contact />
    </div>
  );
}
export { Home };
