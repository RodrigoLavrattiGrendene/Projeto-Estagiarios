import { useEffect } from "react";

const Configuration = () => {
  useEffect(() => {
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secondsEl = document.getElementById("seconds");

    const newYear = "1 Jan 2024";

    const countdown = () => {
      const newYearDate = new Date(newYear);
      const currentDate = new Date();

      const totalSeconds = (newYearDate - currentDate) / 1000;

      const daysNew = Math.floor(totalSeconds / 3600 / 24);
      const hoursNew = Math.floor(totalSeconds / 3600) % 24;
      const minsNew = Math.floor(totalSeconds / 60) % 60;
      const secondsNew = Math.floor(totalSeconds) % 60;

      daysEl.innerHTML = daysNew;
      hoursEl.innerHTML = formatTime(hoursNew);
      minsEl.innerHTML = formatTime(minsNew);
      secondsEl.innerHTML = formatTime(secondsNew);
    };

    const formatTime = (time) => {
      return time < 10 ? `0${time}` : time;
    };

    countdown();

    setInterval(countdown, 1000);
  }, []);

  return (
    <>
      <h1>Countdown</h1>
      <div className="countdown-container">
        <div className="countdown-el days">
          <p className="text" id="days">
            0
          </p>
          <span>dias</span>
        </div>
        <div className="countdown-el hours">
          <p className="text" id="hours">
            0
          </p>
          <span>horas</span>
        </div>
        <div className="countdown-el mins">
          <p className="text" id="mins">
            0
          </p>
          <span>minutos</span>
        </div>
        <div className="countdown-el seconds">
          <p className="text" id="seconds">
            0
          </p>
          <span>seconds</span>
        </div>
      </div>
    </>
  );
};

export default Configuration;
