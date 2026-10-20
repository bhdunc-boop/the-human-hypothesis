# The Human Hypothesis

Infrastructure scaffold for `thehumanhypothesis.com`.

## Stack

- GitHub for source control
- Vite for the frontend build
- Cloudflare Pages for deployment
- Cloudflare DNS and SSL
- IONOS as the domain registrar

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

Cloudflare Pages should use:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22`
