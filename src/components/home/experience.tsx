import { memo } from "react";
import { EXPERIENCES } from "../../data/experiences";

const Experience = memo(() => {
  return (
    <section>
      <h3 className="font-semibold text-xl text-primary mb-3">Experience</h3>

      <div className="divide-y xl:divide-x xl:divide-y-0 divide-default grid xl:grid-cols-2">
        {EXPERIENCES.map((exp, index) => (
          <div key={index} className="xl:odd:pr-6 xl:even:pl-6 py-4">
            <div className="flex justify-between">
              <a
                href={exp.link}
                target="_blank"
                className="hover:text-primary underline"
              >
                <h4 className="text-primary mb-0.5">{exp.company}</h4>
              </a>

              <p className="text-secondary text-sm">{exp.period}</p>
            </div>

            <p className="text-secondary text-sm mb-2">{exp.role}</p>

            <p className="text-secondary">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export { Experience };
