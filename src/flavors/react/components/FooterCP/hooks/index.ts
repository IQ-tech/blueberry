import { track } from "@mkt/analytics/redline";

import { ElementEventPayload } from '../types';

export default function useClassicFooter() {
  function trackLink(eventPayload: ElementEventPayload) {
    track('elementClicked', {
      webElement: { ...eventPayload }
    });
  }

  return { trackLink }
}
