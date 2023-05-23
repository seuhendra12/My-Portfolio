import pas_photo from "./img/pas_photo.png";
import photo_with_pc from "./img/with_pc.jpg";
import photo_at_campus from "./img/at_campus.jpg";

const About = () => {
  return (
    <>
      <section className="about section-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <img
                src={photo_with_pc}
                className="about-image img-fluid"
                alt="foto with pc"
              />
            </div>
            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <div className="about-thumb">
                <div className="section-title-wrap d-flex justify-content-start align-items-center mb-4">
                  <h2 className="about-text">About me</h2>
                  <img
                    src={pas_photo}
                    className="photo-image img-fluid"
                    alt="pas foto"
                  />
                </div>
                <h3 className="pt-2 mb-3">Aku dan tentang diriku</h3>
                <p className="text-justify">
                  Saya seorang Mahasiswa Semester 6 di Politeknik Negeri Padang
                  Jurusan Teknologi Informasi Program Studi D3 Manajemen
                  Informatika. Saya belajar bahasa java, bahasa c, dan bahasa
                  pemrograman PHP. Memiliki kerjasama tim yang baik, komunikasi
                  yang lancar, jujur, membagi waktu dengan baik dan bertanggung
                  jawab
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured section-padding">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="profile-thumb">
                <div className="profile-title">
                  <h4 className="mb-0 text-center">Informasi Tambahan</h4>
                </div>
                <div className="profile-body">
                  <p>
                    <span className="profile-small-title">Nama</span>
                    <span className="text-span">Seuhendra Setiawan</span>
                  </p>
                  <p>
                    <span className="profile-small-title">TTL</span>
                    <span className="text-span">
                      Kundur Barat Karimun, 20 September 2001
                    </span>
                  </p>
                  <p>
                    <span className="profile-small-title">Telepon</span>
                    <span>
                      <a
                        href="tel:082283274212"
                        className="text-span profile-text">
                        0822-8327-4212
                      </a>
                    </span>
                  </p>
                  <p>
                    <span className="profile-small-title">Email</span>
                    <span>
                      <a
                        href="mailto:seuhendra12@gmail.com"
                        className="text-span profile-text">
                        seuhendra12@gmail.com
                      </a>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 mt-5 mt-lg-0">
              <img
                src={photo_at_campus}
                className="about-image img-fluid align-items-center"
                alt="foto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
