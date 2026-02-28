import { supabase } from "@/integrations/supabase/client";

export const trackEvent = async (eventType: string) => {
  try {
    await supabase.from("site_events").insert({
      event_type: eventType,
      page_url: window.location.href,
      user_agent: navigator.userAgent,
    });
  } catch (e) {
    // silently fail - don't break UX for tracking
  }
};
