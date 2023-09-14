const API_KEY = import.meta.env.VITE_PUBLIC_API_KEY;
const AUTH_DOMAIN = import.meta.env.VITE_PUBLIC_AUTH_DOMAIN;
const PROJECT_ID = import.meta.env.VITE_PUBLIC_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.VITE_PUBLIC_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.VITE_PUBLIC_MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.VITE_PUBLIC_APP_ID;
const CAPTCHA_KEY = import.meta.env.VITE_PUBLIC_CAPTCHA_SITE_KEY;
const SERVER_API_URL = import.meta.env.VITE_PUBLIC_SERVER_API_URL;

if (
  !API_KEY ||
  !AUTH_DOMAIN ||
  !PROJECT_ID ||
  !STORAGE_BUCKET ||
  !MESSAGING_SENDER_ID ||
  !CAPTCHA_KEY ||
  !SERVER_API_URL
) {
  console.error("ENV vars not found!");
  process.exit(1);
}

export const configs = {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  SERVER_API_URL,
  CAPTCHA_KEY,
};
