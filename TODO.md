# Task Progress: Fix manifest.json and /api/contact 405 errors

## Completed
- [x] Created `client/public/manifest.json` with valid PWA manifest
- [x] Updated `Contact.js` to use production backend URL (https://portfolio-c6p0.onrender.com) + dev proxy

## Remaining Steps
- [x] Fixed Contact.js syntax ("roimport") and added error logging + Tailwind button
- [ ] Test locally
  - Backend: `cd server && npm start` (verify https://portfolio-c6p0.onrender.com/api/contact works)
  - Frontend: `cd client && npm start`
  - Test: http://localhost:3000 → Contact form (should proxy in dev, direct backend in prod)
- [ ] Production: `cd client && npm run build && vercel --prod`
- [ ] Clear browser cache, verify no manifest/405 errors
  - Backend: `cd server && npm start`
  - Frontend: `cd client && npm start`
  - Test contact form at http://localhost:3000/#contact
- [ ] Redeploy frontend to Vercel (`vercel --prod`)
- [ ] Verify production: No manifest error, contact form sends to backend
