import { treaty } from '@elysiajs/eden'
import type { App } from '../app/api/[[...slugs]]/route'

// this require .api to enter /api prefix
const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_BACKEND_URL;

if (!url) throw new Error("NEXT_PUBLIC_BACKEND_URL is not defined");

export const client = treaty<App>(url).api