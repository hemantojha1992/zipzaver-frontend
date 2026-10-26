# Zipzaver Website + Admin Panel

A responsive React + Vite starter for a public Zipzaver landing page and a separate admin workspace. It includes sample/static data so the full UI can be previewed before your backend APIs are connected.

## Included pages
- Public website: `/`
- Admin login: `/admin`
- Dashboard overview: `/admin/dashboard`
- Rides, Riders, Drivers, Payments
- Vehicles, Coupons & Promotions, Ratings & Reviews
- Complaints, Support Tickets, Admin Users
- Reports & Analytics, Notifications, Settings

## Run locally

1. Install Node.js 20+.
2. Copy `.env.example` to `.env`.
3. Run `npm install`.
4. Run `npm run dev` and open the URL printed by Vite.

### Local demo login
With `VITE_DEMO_ADMIN_LOGIN=true`, use:
- Email: `admin@zipzaver.demo`
- Password: `ZipzaverDemo@2026`

**Security warning:** demo login is only for local preview. Before publishing to a public domain, set `VITE_DEMO_ADMIN_LOGIN=false` and implement/enable real backend authentication, secure session/token handling, and server-side admin-role authorization. A frontend-only login is not secure.

## Static sample data and API mode

Admin tables use bundled sample records by default (`VITE_USE_DEMO_DATA=true`). Use **Connect API** or **Load API data** on each page to try the configured backend endpoints. Update `VITE_API_BASE_URL` and endpoint paths to match your real API. Demo rows are fictional and must not be presented as real users, rides, payments, or business metrics.

Example `.env` values:

```env
VITE_API_BASE_URL=https://api.your-domain.com
VITE_ADMIN_LOGIN_PATH=/admin/login
VITE_ADMIN_ME_PATH=/admin/me
VITE_USE_DEMO_DATA=true
VITE_DEMO_ADMIN_LOGIN=false
```

Current example endpoints to adapt to your backend:
- `POST /admin/login`
- `GET /admin/dashboard`
- `GET /admin/rides`
- `GET /admin/riders`
- `GET /admin/drivers`
- `GET /admin/payments`
- `GET /admin/vehicles`
- `GET /admin/coupons`
- `GET /admin/reviews`
- `GET /admin/complaints`
- `GET /admin/support`
- `GET /admin/users`
- `GET /admin/reports`
- `GET /admin/notifications`
- `GET /admin/settings`, `PUT /admin/settings`

Not all these routes necessarily exist in your current Node/Express backend. They are placeholders to wire to your own routes. Sample settings are only held in page state until a real API is connected.

## Production build

```bash
npm run build
```

Deploy the generated `dist/` folder to your web host. Configure SPA fallback so direct navigation to `/admin` and `/admin/dashboard` serves `index.html`. Use HTTPS, secure backend authorization, rate-limited login, and production environment variables. Check all third-party library and image/font licenses before launch; only use brand assets you own or have permission to use.
