import project from "./img/project.png";
import pnp from "./img/pnp.png";
import karimun from "./img/karimun.gif";
import binar from "./img/binar.png";

const Project = () => {
  return (
    <section className="projects section-padding" id="project">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-12 ms-auto">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4">
              <img src={project} className="project-image img-fluid" alt="" />

              <h2 className="project-text">Projects</h2>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="projects-thumb">
              <div className="projects-info">
                <small className="projects-tag">Pemrograman Web Dinamis</small>
                <h3 className="projects-title">SIAKAD PNP</h3>
              </div>
              <a
                href="https://github.com/seuhendra12/SIAKAD-PNP"
                className="popup-image">
                <img src={pnp} className="projects-image img-fluid" alt="" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="projects-thumb">
              <div className="projects-info">
                <small className="projects-tag">
                  Pemrograman Web Framework
                </small>
                <h3 className="projects-title">SIMPUSDA KARIMUN</h3>
              </div>
              <a
                href="https://github.com/seuhendra12/SIMPUSDA-KARIMUN"
                className="popup-image">
                <img
                  src={karimun}
                  className="projects-image img-fluid"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="projects-thumb">
              <div className="projects-info">
                <small className="projects-tag">
                  Fullstack Web Development
                </small>
                <h3 className="projects-title">Binar Car Rental</h3>
              </div>
              <a
                href="https://github.com/seuhendra12/Binar-Car-Rental"
                className="popup-image">
                <img src={binar} className="projects-image img-fluid" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project;
