import { createLazyFileRoute, Link } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/projects")({
  component: Projects,
});

function Projects() {
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
        <h1 className="text-5xl font-bold mb-8">Projects</h1>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project cards would go here */}
          </div>
        </div>
      </main>
    </div>
  );
}
