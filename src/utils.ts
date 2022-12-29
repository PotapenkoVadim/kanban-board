export const generateID = (): string => Math.random()
  .toString(16)
  .slice(2) + new Date()
  .getTime()
  .toString(36);
