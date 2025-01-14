import { memo } from "react";
import { GITHUB_LINK, PROJECT_LINKS } from "../../data/links";
import { GitHubIcon } from "../icons/github";
import { RedirectIcon } from "../icons/redirect";

interface ProjectItemProps {
  title: string;
  siteLink: string;
  githubLink: string;
  description: string;
  stack: string[];
}

const ProjectItem = memo(
  ({ title, siteLink, githubLink, description, stack }: ProjectItemProps) => {
    return (
      <li className="py-3.5 border-b border-default last:border-0">
        <div className="flex gap-4">
          <div className="flex-grow">
            <h4 className="text-primary font-medium mb-">{title}</h4>

            <p className="text-sm text-secondary leading-relaxed mb-2">
              {description}
            </p>

            <div className="flex gap-3 text-xs">
              {stack.map((tech, index) => (
                <span key={index} className="text-xs text-gray-400">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-3 pt-0.5">
            <a
              href={siteLink}
              className="text-secondary hover:text-primary transition-colors"
              target="_blank"
            >
              <RedirectIcon width={14} height={14} />
            </a>
            <a
              href={githubLink}
              className="text-secondary hover:text-primary transition-colors"
              target="_blank"
            >
              <GitHubIcon width={14} height={14} />
            </a>
          </div>
        </div>
      </li>
    );
  }
);

const Projects = memo(() => {
  return (
    <section className="text-secondary space-y-4">
      <h2 className="text-xl font-medium text-primary">Projects</h2>

      <ul>
        <ProjectItem
          title="Code Snippet App"
          siteLink="https://snippetapp.vercel.app/"
          githubLink="https://github.com/Reyzartz/snippet-app"
          description="Full stack web app for creating and sharing code snippets with syntax highlighting"
          stack={["Next.js", "MongoDB", "TailwindCSS", "Auth0"]}
        />

        <ProjectItem
          title="React Voice Assistant"
          siteLink="https://react-voice-assistant.netlify.app/"
          githubLink="https://github.com/Reyzartz/react-voice-assistant"
          description="NPM package for adding voice commands to React applications"
          stack={["React", "TypeScript", "Web Speech API"]}
        />

        <ProjectItem
          title="GreatLog"
          siteLink="https://greatlog.vercel.app/"
          githubLink="https://github.com/Reyzartz/greatlog"
          description="A minimal changelog manager with version control integration"
          stack={["React", "Firebase", "Material-UI", "GitHub API"]}
        />
      </ul>

      <div>
        <a
          href="https://github.com/reyzartz"
          target="_blank"
          className="inline-flex items-center text-sm text-secondary hover:text-primary transition-colors"
        >
          View all projects
          <span className="ml-1">→</span>
        </a>
      </div>
    </section>
  );
});

export { Projects };
