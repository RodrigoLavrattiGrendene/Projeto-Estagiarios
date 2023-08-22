import Counter from "../components/Counter/Counter";
import Title from "../components/Title/Title";

import useCountdown from "../hooks/useCountdown";

import "./Countdown.scss";

const Countdown = () => {
  const [day, hour, minute, second] = useCountdown();

  return (
    <div>
      <div className="container-count">
        <div className="container-count-conteudo">
          <Title title="Contagem Regressiva" />
          <div className="countdown-container">
            <Counter title="Dias" number={day} />
            <Counter title="Horas" number={hour} />
            <Counter title="Minutos" number={minute} />
            <Counter title="Segundos" number={second} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
