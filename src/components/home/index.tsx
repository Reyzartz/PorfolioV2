import { memo } from "react";

const Introduction = memo(() => {
  return (
    <div className="text-secondary text-lg space-y-2">
      <p>
        <span>I'm a software developer working remotely at</span>

        <a
          href="https://revenuehero.io"
          className="underline ml-1 hover:text-primary"
          target="_blank"
        >
          RevenueHero
        </a>

        <span>
          . I'm passionate about building impactful products and writing clean,
          efficient code.
        </span>
      </p>

      <p>
        Outside my profession, I enjoy playing chess, training in kickboxing and
        sketching.
      </p>
    </div>
  );
});

function Home() {
  return <Introduction />;
}

export { Home };
