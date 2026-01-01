import { treaty } from '@elysiajs/eden';
import type { App } from '../app/api/[[...slugs]]/route'

const url = process.env.NEXT_PUBLIC_BACKEND_URL;

if (!url) {
  throw new Error(
    "NEXT_PUBLIC_BACKEND_URL is not defined. Check your environment variables."
  );
}

export const client = treaty<App>(url).api;
