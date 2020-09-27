export const formatTime = (milisecs) => {
  let mins = (milisecs / 60000).toFixed(0);
  return `${mins < 10 ? `0${mins}` : mins}:00`;
};
