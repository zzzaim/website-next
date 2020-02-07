export const GA_TRACKING_ID = "UA-98886738-5";

export function pageview(url) {
  window.gtag("config", GA_TRACKING_ID, { page_path: url });
}

export function event({ action, category, label, value }) {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value
  });
}
