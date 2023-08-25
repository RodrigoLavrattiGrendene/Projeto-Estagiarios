import { Link } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../img/logo.jpg";
import Container from "./Container";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-navbar">
        <Container>
          <ul className="list">
            <li className="item">
              <Link to="/">
                <img src={logo} alt="ProjectPilot" />
              </Link>
            </li>
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/config">Configuration</Link>
            </li>
            <li className="item">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </Container>
      </div>
    </nav>
  );
};

export default Navbar;
