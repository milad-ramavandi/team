This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



team
├── /app                  ⬅️ مسیرهای صفحه‌ها (App Router)
│   ├── /api              ⬅️ API routes (اختیاری - Server Functions)
│   ├── /dashboard        ⬅️ صفحات داشبورد
│   │   └── page.tsx
│   ├── /about
│   │   └── page.tsx
│   └── layout.tsx        ⬅️ ریشه لایه اصلی سایت
│   └── page.tsx          ⬅️ صفحه اصلی
│
├── /components           ⬅️ تمام کامپوننت‌های قابل استفاده مجدد
│   ├── ui/               ⬅️ دکمه‌ها، اینپوت‌ها، مدال‌ها...
│   ├── layout/           ⬅️ Header، Footer، Sidebar و ...
│   └── shared/           ⬅️ عناصر مشترک چند صفحه
│
├── /lib                  ⬅️ توابع کاربردی، configها، کلاس‌های کمکی
│   ├── utils.ts
│   ├── api.ts
│   └── constants.ts
│
├── /hooks                ⬅️ هوک‌های سفارشی React/Next
│   └── useAuth.ts
│
├── /store                ⬅️ (اگر نیاز به state global داری - مثلاً Zustand یا Redux)
│   └── userStore.ts
│
├── /types                ⬅️ تمام TypeScript type/interface ها
│   └── user.ts
│
├── /public               ⬅️ عکس‌ها و فایل‌های استاتیک
│   └── logo.svg
│
├── /styles               ⬅️ استایل‌های global و ماژول‌ها (اگر از CSS Modules استفاده بشه)
│   └── globals.css
│
├── /middleware.ts        ⬅️ برای ریدایرکت، احراز هویت و غیره
├── /next.config.js
├── /tsconfig.json
└── /package.json


