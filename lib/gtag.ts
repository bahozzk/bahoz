// Google Analytics & Tag Manager tracking utilities
export const GA_MEASUREMENT_ID = 'G-MTN77PVVGX';
export const GTM_ID = 'GTM-MP5FWJ5F';

// Track page views (works with both GA and GTM)
export const pageview = (url: string) => {
  // Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
  
  // Google Tag Manager
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  // Google Analytics
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
  
  // Google Tag Manager
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: action,
      eventCategory: category,
      eventLabel: label,
      eventValue: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName: string) => {
  event({
    action: 'click',
    category: 'Button',
    label: buttonName,
  });
};

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  event({
    action: 'click',
    category: 'Social Media',
    label: platform,
  });
};

// Track external links
export const trackExternalLink = (url: string) => {
  event({
    action: 'click',
    category: 'External Link',
    label: url,
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  event({
    action: 'scroll',
    category: 'Engagement',
    label: `${percentage}%`,
    value: percentage,
  });
};
