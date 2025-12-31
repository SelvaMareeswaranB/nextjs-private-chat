import { treaty } from '@elysiajs/eden'
import type { App } from '../app/api/[[...slugs]]/route'

// this require .api to enter /api prefix
const url = process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:3000";
export const client = treaty<App>(url).api