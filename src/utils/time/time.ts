export const formatDuration = (ms: number): string => {
  const seconds = Math.floor((ms / 1000) % 60);
  const padSeconds = String(seconds).padStart(2, "0");

  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const padMinutes = String(minutes).padStart(2, "0");

  const hours = Math.floor((ms / 1000 / 3600) % 24);
  const padHours = String(hours).padStart(2, "0");

  return `${padHours}:${padMinutes}:${padSeconds}`;
};
