import pas_photo from "./img/pas_photo.png";
import photo_card from "./img/photo_card.jpg";
import photo_at_campus from "./img/at_campus.jpg";

const About = () => {
  return (
    <>
      <section className="about section-padding" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12">
              <img
                src={photo_card}
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
                <h3 className="pt-2 mb-3"></h3>
                <p className="text-justify">
                  Sebagai seorang lulusan baru dengan gelar Diploma Tiga di bidang Manajemen Informatika.
                  Saya memiliki hasrat yang besar untuk teknologi informasi dan komputer, serta mempunyai
                  dasar yang kuat dalam manajemen sistem dan aplikasi. Selama studi saya, saya aktif terlibat
                  dalam proyek-proyek yang memungkinkan saya untuk mengembangkan keterampilan analitis,
                  pemecahan masalah, dan kemampuan kerja tim. Saya siap untuk memulai karir saya dan
                  berkontribusi dalam dunia teknologi informasi.
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
                    <span className="text-span">Seuhendra Setiawan, A.Md.Kom</span>
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
