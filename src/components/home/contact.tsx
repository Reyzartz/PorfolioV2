import { memo } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const initializeCalendar = async function () {
  const Cal = await getCalApi();

  Cal("ui", {
    theme: "dark",
    hideEventTypeDetails: false,
    cssVarsPerTheme: {
      dark: {
        "cal-bg-emphasis": "#193651",
        "cal-bg": "#13293d",
        "cal-bg-subtle": "#193651",
        "cal-bg-muted": "#13293d",
        "cal-bg-inverted": "#caf0f8",
        "cal-bg-info": "#275583",
        "cal-bg-success": "#193651",
        "cal-bg-attention": "#275583",
        "cal-bg-error": "#275583",
        "cal-bg-dark-error": "#275583",
        "cal-border-emphasis": "#275583",
        "cal-border": "#275583",
        "cal-border-subtle": "#275583",
        "cal-border-booker": "#275583",
        "cal-border-muted": "#275583",
        "cal-border-error": "#275583",
        "cal-border-focus": "#275583",
        "cal-text-emphasis": "#caf0f8",
        "cal-text": "#caf0f8",
        "cal-text-subtle": "#9ccbd4",
        "cal-text-muted": "#9ccbd4",
        "cal-text-inverted": "#13293d",
        "cal-text-info": "#caf0f8",
        "cal-text-success": "#caf0f8",
        "cal-text-attention": "#caf0f8",
        "cal-text-error": "#caf0f8",
        "cal-brand": "#caf0f8",
        "cal-brand-emphasis": "#9ccbd4",
        "cal-brand-text": "#13293d",
      },
      light: {},
    },
  });
};

const Contact = memo(() => {
  useEffect(() => {
    initializeCalendar();
  }, []);

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-medium text-primary">Let's Chat!</h2>

      <p>
        Want to grab a virtual coffee or just say hi? Choose a time below to
        chat about tech, projects, or anything else on your mind!
      </p>

      <div className="lg:mx-0 -mx-5">
        <Cal calLink="reyan/15min" />
      </div>
    </section>
  );
});

export { Contact };
