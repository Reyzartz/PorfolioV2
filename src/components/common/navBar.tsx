import { Link } from "@tanstack/react-router";
import { GitHubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";
import { GmailIcon } from "../icons/gmail";
import { CodePenIcon } from "../icons/codepen";
import { TwitterIcon } from "../icons/twitter";

type NavLink = {
  icon: React.ComponentType<{ width?: number; height?: number }>;
  label: string;
  href: string;
};

const navLinks: NavLink[] = [
  {
    icon: GitHubIcon,
    label: "GitHub",
    href: "https://github.com/reyzartz",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: "https://linkedin.com/in/reyan-rahman",
  },
  {
    icon: CodePenIcon,
    label: "CodPen",
    href: "https://codepen.io/reyzartz",
  },
  {
    icon: TwitterIcon,
    label: "Twitter",
    href: "https://x.com/reyan_rahman",
  },
  {
    icon: GmailIcon,
    label: "Contact",
    href: "mailto:reyanrahma@gmail.com",
  },
];

function NavBar() {
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

export default NavBar;
