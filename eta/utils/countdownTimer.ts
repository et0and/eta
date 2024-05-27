export const getTimeRemaining = (endDate: Date) => {
  const totalMilliseconds = endDate.getTime() - Date.now();
  const totalSeconds = Math.floor(totalMilliseconds / 1000);
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = totalMilliseconds % 1000;

  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
};
