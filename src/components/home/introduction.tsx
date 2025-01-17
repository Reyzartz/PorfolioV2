import { memo } from "react";
import { RH_LINK } from "../../data/links";

const Introduction = memo(() => {
  return (
    <section className="text-secondary space-y-2">
      <p>
        Hey, <br />
        <span>I'm Reyan, a Frontend Engineer at</span>
        <a
          href={RH_LINK}
          className="underline mx-1 text-primary"
          target="_blank"
        >
          RevenueHero
        </a>
        <span>
          with 3+ years of experience in building scalable web applications.
        </span>
      </p>

      <p>
        At RevenueHero, I've built core features like lead routing and meeting
        scheduling systems. Previously at Team Geek Solutions, I focused on
        feature development and performance optimization.
      </p>

      <p>
        I'm passionate about clean code, modern web technologies, and creating
        efficient solutions. Outside work, I enjoy chess, kickboxing and
        sketching.
      </p>
    </section>
  );
});

export { Introduction };
