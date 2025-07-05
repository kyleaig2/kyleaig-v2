import { sendGAEvent } from "@next/third-parties/google"

export const sendPageView = (page: string) => {
    sendGAEvent('event', 'pageview', { value: page });
}