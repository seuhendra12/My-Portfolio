// import "../ui/portfolio.css";
import telephone from "./img/telephone.svg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-purple fixed-top">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <a href="/" class="navbar-brand mx-auto mx-lg-0 text-white">
            My Portfolio
          </a>
          <ul className="navbar-nav ms-lg-5">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#project">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-lg-flex align-items-center d-none ms-auto">
            <div className="navbar-icon me-3">
              <img src={telephone} alt="telephone" />
            </div>
            <a
              className="btn custom-btn"
              href="https://api.whatsapp.com/send?phone=6282283274212">
              0822-8327-4212
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;