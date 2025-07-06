import { sendGAEvent } from "@next/third-parties/google";

export const sendPageView = (page: string) => {
  const p = page || "landing";

  sendGAEvent("event", "page_view", {
    page_title: p,
    page_path: `/#${p}`,
  });
};
