import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";
import telegram from "./img/telegram.svg";
import youtube from "./img/youtube.svg";
import contact from "./img/contact.png";
import github from "./img/github.svg";

const Contact = () => {
  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-12">
            <div className="section-title-wrap d-flex justify-content-center align-items-center mb-5">
              <img src={contact} className="contact-image img-fluid" alt="" />
              <h2 className="contact-text">Contact me</h2>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="col-lg-3 col-md-6 col-12 pe-lg-0">
            <div className="contact-info contact-info-border-start d-flex flex-column">
              <strong className="site-footer-title d-block mb-3">
                Education
              </strong>
              <ul className="footer-menu">
                <li className="footer-menu-item">
                  <p>D3 Manajemen Informatika - Politeknik Negeri Padang</p>
                </li>
              </ul>
              <strong className="site-footer-title d-block mt-4 mb-3">
                Stay connected
              </strong>
              <ul className="social-icon">
                <li className="social-icon-item me-2">
                  <a href="https://github.com/seuhendra12">
                    <img src={github} alt="" />
                  </a>
                </li>
                <li className="social-icon-item me-2">
                  <a href="https://web.facebook.com/Seuhendra">
                    <img src={facebook} alt="" />
                  </a>
                </li>
                <li className="social-icon-item me-2">
                  <a href="https://instagram.com/seuhendrasetiawan">
                    <img src={instagram} alt="" />
                  </a>
                </li>
                <li className="social-icon-item me-2">
                  <a href="https://t.me/seuhendra12">
                    <img src={telegram} alt="" />
                  </a>
                </li>
                <li className="social-icon-item me-2">
                  <a href="https://www.youtube.com/channel/UCMNOUlSYZv9Jyto4yJy5O6Q">
                    <img src={youtube} alt="" />
                  </a>
                </li>
              </ul>
              <strong className="site-footer-title d-block mt-4 mb-3">
                Projects
              </strong>
              <p className="mb-0">
                Saya baru belajar membuat proyek sederhana dengan menggunakan
                beberapa bahasa pemrograman
              </p>
            </div>
          </div>
          <div className=" col-md-9 col-12 ps-lg-0">
            <div className="contact-info d-flex flex-column">
              <strong className="site-footer-title d-block mb-3">About</strong>
              <p className="mb-2">
                Saya seorang Mahasiswa Semester 5 di Politeknik Negeri Padang
                Jurusan Teknologi Informasi Program Studi D3 Manajemen
                Informatika.
              </p>
              <strong className="site-footer-title d-block mt-4 mb-3">
                Email
              </strong>
              <p>
                <a href="mailto:seuhendra12@gmail.com" className="email-text">
                  seuhendra12@gmail.com
                </a>
              </p>
              <strong className="site-footer-title d-block mt-4 mb-3">
                Call
              </strong>
              <p className="mb-0">
                <a href="tel: 082283274212" className="phone-text">
                  +628 2283 2742 12
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
