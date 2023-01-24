export const isError = (err: unknown): err is Error => err instanceof Error;
export const castError = (err: unknown): Error =>
  isError(err) ? err : new Error(String(err));
