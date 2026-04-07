

## Update Meta Tags to Production Domain

Update all URL references in `index.html` from `faridplayground.lovable.app` to `faridplayground.netlify.app`:

### Changes (single file: `index.html`)

1. `canonical` href
2. `og:url` content
3. `og:image` content
4. `twitter:image` content
5. JSON-LD `url` field

All five references updated to use `https://faridplayground.netlify.app/`. No other files affected. GA4 tracking logic remains unchanged.

