import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Configuration = () => {
  const [selectDate, setSelectDate] = useState(null);

  useEffect(() => {
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minsEl = document.getElementById("mins");
    const secondsEl = document.getElementById("seconds");

    const newYear = "1 Jan 2024";
    //const newYear = selectDate;

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

  const dateFormatAux = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [month, day, year].join("-");
  };

  const dateFormat = (date) => {
    const formatYearMonthDay = dateFormatAux(date);
    const formatISO = new Date(date).toISOString();

    return [formatYearMonthDay, formatISO];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let dateYMD, dateISO;

    if (selectDate != null) {
      [dateYMD, dateISO] = dateFormat(selectDate);
    }

    console.log(dateYMD, dateISO);
  };

  return (
    <>
      <h1>Countdown</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <DatePicker
            selected={selectDate}
            onChange={(date) => setSelectDate(date)}
            className="form-filds"
            id="date"
            placeholderText="Escolha uma data"
            dateFormat="dd/MM/yyy"
          />
          <button>Clique aqui</button>
        </form>
      </div>
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
