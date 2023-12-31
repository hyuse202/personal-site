export const PROJECT_CACHE_KEY = "project";
export const POAP_CACHE_KEY = "poap";

export const NAV_LINKS = [
  { to: "/", label: "~/Home" },
  { to: "/projects", label: "~/Projects" },
];

export const MAXIMUM_THEME_INDEX = 7;
export const MAX_MESSAGE = 2;
export const GITHUB_CLIENT_ID = import.meta.env.GITHUB_CLIENT_ID;
export const GITHUB_CLIENT_SECRET = import.meta.env.GITHUB_CLIENT_SECRET;
export const SESSION_SECRET = import.meta.env.SESSION_SECRET;
export const AUTH_COOKIE_NAME = "__session_nfz";
export const SITE_URL = import.meta.env.SITE_URL;
export const GITHUB_AUTH_REDIRECT_URL = `${SITE_URL}/api/auth/callback/github`;
export const THEME_COOKIE_NAME = "__theme_nfz";
