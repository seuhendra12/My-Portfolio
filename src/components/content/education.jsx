import education from "./img/education.png";
import pnp from "./img/pnp.png";
import etc from "./img/etc.jpg";
import binar from "./img/binar.png";
import gamatechno from "./img/logo-gamatechno.png";

const Education = () => {
  return (
    <section className="services section-padding" id="education">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
              <img
                src={education}
                className="education-image img-fluid"
                alt="education foto"
              />
              <h1 className="education-text">Education</h1>
            </div>
          </div>
          <div className="col-lg-12 mx-auto">
            <div className="row pt-lg-5">
              <div className="col-lg-3 col-12">
                <div className="card-body bg-white pb-3">
                  <div className=" flex-wrap align-items-center text-center">
                    <img src={pnp} className="pnp-image mt-4" alt="pnp" />
                    <div className="mt-5">
                      <h5>Politeknik Negeri Padang</h5>
                      <h6>2020 - 2023</h6>
                      <p>D3 Manajemen Informatika</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="card-body bg-white pb-3">
                  <div className=" flex-wrap align-items-center text-center">
                    <img src={etc} className="pnp-image mt-4" alt="pnp" />
                    <div className="mt-5">
                      <h5>English Tutorial Centre</h5>
                      <h6>2021</h6>
                      <p>Program Bahasa Mandarin</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="card-body bg-white pb-3">
                  <div className=" flex-wrap align-items-center text-center">
                    <img src={binar} className="pnp-image mt-4" alt="pnp" />
                    <div className="mt-5">
                      <h5>Binar Academy</h5>
                      <h6>2022</h6>
                      <p>Fullstack Web Development</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-12">
                <div className="card-body bg-white pb-3">
                  <div className=" flex-wrap align-items-center text-center">
                    <img src={gamatechno} className="pnp-image mt-4" alt="pnp" />
                    <div className="mt-5">
                      <h5>Gamatechno Indonesia</h5>
                      <h6>2022</h6>
                      <p>Backend Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
