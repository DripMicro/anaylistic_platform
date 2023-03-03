import { env } from "../env/server.mjs";

export const storageBasePath = String(env.LEGACY_PHP_URL);

export const serverStoragePath = (path: string) => `${storageBasePath}/${path}`;
