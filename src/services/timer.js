export const timer = {
  time: 0,
  interval: null,
  start: () => {
    this.interval = setInterval(() => {
      timer.time++;
    }, 1000);
  },
  stop: () => {
    clearInterval(this.interval);
  },
  reset: () => {
    this.stop();
    this.time = 0;
  },
};
