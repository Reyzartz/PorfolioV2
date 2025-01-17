import { memo } from "react";
import { GITHUB_LINK } from "../../data/links";
import { PROJECTS } from "../../data/projects";
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
    <section className="text-secondary">
      <h2 className="text-xl font-medium text-primary">Projects</h2>

      <ul>
        {PROJECTS.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </ul>

      <div>
        <a
          href={GITHUB_LINK}
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
