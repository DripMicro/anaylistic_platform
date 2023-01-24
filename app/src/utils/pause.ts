export const pause = async (delay: number) => {
  return new Promise<void>((resolve, _reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};
