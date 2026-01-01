import { treaty } from '@elysiajs/eden';
import type { App } from '../app/api/[[...slugs]]/route';

// Pick the URL safely
const url =
  process.env.NEXT_PUBLIC_BACKEND_URL ??
  (process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://nextjs-private-chat.vercel.app");

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_BACKEND_URL is not defined. Check your environment variables."
  );
}

export const client = treaty<App>(url).api;
