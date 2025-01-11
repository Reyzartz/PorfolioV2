import { memo } from "react";
import { RH_LINK } from "../../data/links";

const Introduction = memo(() => {
  return (
    <section className="text-secondary space-y-2">
      <p>
        <span>I'm a software developer working remotely at</span>

        <a
          href={RH_LINK}
          className="underline mx-1 text-primary"
          target="_blank"
        >
          RevenueHero
        </a>

        <span>
          for the past three years. I'm passionate about building impactful
          products and writing clean, efficient code.
        </span>
      </p>

      <p>
        Outside my profession, I enjoy playing chess, training in kickboxing and
        sketching.
      </p>
    </section>
  );
});

export { Introduction };
