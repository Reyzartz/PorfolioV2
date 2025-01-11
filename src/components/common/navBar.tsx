import { Link } from "@tanstack/react-router";
import { GitHubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";
import { GmailIcon } from "../icons/gmail";

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
            >
              <Icon width={20} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
