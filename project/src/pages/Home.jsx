import { Link } from "react-router-dom";
import "./Home.scss";
import btnReact from "../img/btn-react.png";

const Home = () => {
  return (
    <section className="home-container">
      <h1>Bem vindos ao projeto piloto de React Grendene S/A</h1>
      <Link to="/config">
        <div className="img-react">
          <img src={btnReact} alt="Botão React" />
        </div>
      </Link>
      <div className="span-react">
        <span>Clique na logo REACT</span>
      </div>
    </section>
  );
};

export default Home;
