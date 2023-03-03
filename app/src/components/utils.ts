import { env } from "../env.mjs";

export const storageBasePath = String(env.NEXT_PUBLIC_LEGACY_PHP_URL);

export const serverStoragePath = (path: string) => `${storageBasePath}/${path}`;
