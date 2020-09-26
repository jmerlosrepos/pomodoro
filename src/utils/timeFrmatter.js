const formatTime = (milisecs) => {
  let mins = milisecs / 60000;
  return `${mins < 10 ? `0${mins}` : mins}:00`;
};

export default formatTime;
