import facebook from "./img/facebook.svg";
import instagram from "./img/instagram.svg";
import telegram from "./img/telegram.svg";
import youtube from "./img/youtube.svg";
import contact from "./img/contact.png";
import github from "./img/github.svg";
import linkedin from "./img/linkedin.svg";

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
                  <a href="https://github.com/seuhendra12" target="_blank" rel="noreferrer">
                    <img src={github} alt="" />
                  </a>
                </li>
                <li className="social-icon-item me-2">
                  <a href="https://web.facebook.com/Seuhendra" target="_blank" rel="noreferrer">
                    <img src={facebook} alt="" />
                  </a>
                </li>
                <li className="social-icon-item me-2">
                  <a href="https://instagram.com/seuhendrasetiawan" target="_blank" rel="noreferrer">
                    <img src={instagram} alt="" />
                  </a>
                </li>
                <li className="social-icon-item me-2">
                  <a href="https://t.me/seuhendra12" target="_blank" rel="noreferrer">
                    <img src={telegram} alt="" />
                  </a>
                </li>
                <li className="social-icon-item me-2">
                  <a href="https://www.youtube.com/channel/UCMNOUlSYZv9Jyto4yJy5O6Q" target="_blank" rel="noreferrer">
                    <img src={youtube} alt="" />
                  </a>
                </li>
                <li className="social-icon-item me-2">
                  <a href="https://www.linkedin.com/in/seuhendra-setiawan-74474a221/" target="_blank" rel="noreferrer">
                    <img src={linkedin} alt="" />
                  </a>
                </li>
              </ul>
              <strong className="site-footer-title d-block mt-4 mb-3">
                Projects
              </strong>
              <p className="text-justify mb-0">
                Saya telah mencoba membuat proyek sederhana dan kompleks menggunakan bahasa pemrograman PHP dengan framework Laravel dan MySQL
              </p>
            </div>
          </div>
          <div className=" col-md-9 col-12 ps-lg-0">
            <div className="contact-info d-flex flex-column">
              <strong className="site-footer-title d-block mb-3">About</strong>
              <p className="text-justify mb-2">
                Saya seorang Lulusan Terbaik dari Program Studi Manajemen Informatika Jurusan Teknologi Informasi Politeknik Negeri Padang dengan IPK = 3.86/4.00 bergelar Ahli Madya Komputer (A.Md.Kom)
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
