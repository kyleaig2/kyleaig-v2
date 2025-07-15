import { sendGAEvent } from "@next/third-parties/google";

export const sendPageView = (page: string) => {
  const p = page || "landing";

  if (process.env.NODE_ENV === "production")
    sendGAEvent("event", "page_view", {
      page_title: p,
      page_path: `/#${p}`,
    });
};

export const sendThemeToggle = (theme: "light" | "dark") => {
  if (process.env.NODE_ENV === "production")
    sendGAEvent("event", "theme_toggle", {
      theme,
    });
};

export const sendSocialClick = (social_name: string) => {
  if (process.env.NODE_ENV === "production")
    sendGAEvent("event", "social_click", {
      social_name,
    });
};

export const sendProjectClick = (project_name: string) => {
  if (process.env.NODE_ENV === "production")
    sendGAEvent("event", "project_click", {
      project_name,
    });
}

export const sendWorkClick = (work_name: string) => {
  if (process.env.NODE_ENV === "production")
    sendGAEvent("event", "work_click", {
      work_name,
    });
}