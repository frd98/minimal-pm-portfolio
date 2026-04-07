

## Fix Netlify SPA Routing (404 on Direct URLs)

### The Problem
Netlify doesn't know your app uses client-side routing (React Router). When you visit `/admin-blog` directly, Netlify looks for a real file at that path, finds nothing, and returns a 404.

### The Fix
Add a `public/_redirects` file with a single rule that sends all requests to `index.html`, letting React Router handle the routing.

**New file: `public/_redirects`**
```
/*    /index.html   200
```

That's it — one file, one line. After deploying this change, all routes (`/blog`, `/admin-blog`, `/blog/:slug`) will work when accessed directly or refreshed.

