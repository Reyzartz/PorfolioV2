import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="p-4 bg-gray-800 text-white">
        <ul className="flex space-x-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-8">About Me</h1>
        <p className="text-xl mb-6">
          I'm a software engineer with a passion for building impactful products
          and writing clean, efficient code.
        </p>
        <p className="text-lg mb-8">
          I have experience working at [Previous Companies] and currently work
          as [Your Role] at [Company].
        </p>
      </main>
    </div>
  );
}
