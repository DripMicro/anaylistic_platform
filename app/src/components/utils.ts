import { serverEnv as env } from "../env/schema.mjs";

export const storageBasePath = String(env.LEGACY_PHP_URL);

export const serverStoragePath = (path: string) => `${storageBasePath}/${path}`;
