

## Add Google Analytics (GA4) with Production-Only Filtering

### What we're doing
Adding Google Analytics 4 tracking (G-B21J9M33YG) to the site, with a hostname check so it only fires on your production Netlify domain — not on Lovable preview/staging URLs.

### Implementation

**File: `index.html`**

Add the GA4 script tags inside `<head>`, wrapped in a small inline script that checks `window.location.hostname` does not include `lovable.app` before injecting the gtag scripts. This ensures zero tracking data from development/preview environments.

The logic:
1. Check if hostname contains `lovable.app` — if yes, skip loading GA entirely
2. If not (i.e., production on Netlify), dynamically insert the standard gtag.js script and configure it with your Measurement ID

No other files need changes. This is a single-file, ~15-line addition.

