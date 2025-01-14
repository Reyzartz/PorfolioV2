import { Link } from "@tanstack/react-router";
import { GitHubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";
import { GmailIcon } from "../icons/gmail";
import { CodePenIcon } from "../icons/codepen";
import { TwitterIcon } from "../icons/twitter";
import {
  CODEPEN_LINK,
  EMAIL,
  GITHUB_LINK,
  LINKEDIN_LINK,
  TWITTER_LINK,
} from "../../data/links";

type NavLink = {
  icon: React.ComponentType<{ width?: number; height?: number }>;
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  {
    icon: GitHubIcon,
    label: "GitHub",
    href: GITHUB_LINK,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: LINKEDIN_LINK,
  },
  {
    icon: CodePenIcon,
    label: "CodPen",
    href: CODEPEN_LINK,
  },
  {
    icon: TwitterIcon,
    label: "Twitter",
    href: TWITTER_LINK,
  },
  {
    icon: GmailIcon,
    label: "Contact",
    href: `mailto:${EMAIL}`,
  },
];

function ContactLinks() {
  return (
    <nav className="text-secondary text-sm">
      <ul className="flex gap-4">
        {navLinks.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              className="flex items-center gap-1.5 hover:text-primary text-secondary rounded-md group transition-colors"
              title={label}
            >
              <Icon width={24} height={24} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { ContactLinks };
