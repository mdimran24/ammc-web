const Footer = () => {
  return (
    <div
      className="container-fluid footer py-5 wow fadeIn"
      data-wow-delay="0.2s"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-xl-9">
            <div className="mb-5">
              <div className="row g-4">
                <div className="col-md-6 col-lg-6 col-xl-5">
                  <div className="footer-item">
                    <a href="index.html" className="p-0">
                      <h3 className="text-primary mb-0">
                        <i className="fas fa-building me-2" /> AMMC Solutions
                      </h3>
                    </a>
                    <p className="text-white mb-4">
                      Your trusted partner in property management and
                      investment. AMMC Solutions provides innovative,
                      client-focused services designed to simplify your journey
                      and maximize your success.
                    </p>
                    <div className="footer-btn d-flex">
                      <a className="btn btn-md-square rounded-circle me-3" href="https://www.facebook.com/share/1BDStixpr1/?mibextid=LQQJ4d">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-md-square rounded-circle me-3" href="https://www.instagram.com/ammcsolutionsltd?igsh=MXFlb2p5OHU4cGZreQ%3D%3D&utm_source=qr">
                        <i className="fab fa-instagram" />
                      </a>
                      {/* <a className="btn btn-md-square rounded-circle me-0" href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a className="btn btn-md-square rounded-circle me-3" href="#">
                        <i className="fab fa-twitter" />
                      </a> */}
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-3">
                  <div className="footer-item">
                    <h4 className="text-white mb-4">Useful Links</h4>
                    <a href="index.html">
                      <i className="fas fa-angle-right me-2" /> Home
                    </a>
                    <a href="about.html">
                      <i className="fas fa-angle-right me-2" /> About
                    </a>
                    <a href="service.html">
                      <i className="fas fa-angle-right me-2" /> Services
                    </a>
                    <a href="testimonial.html">
                      <i className="fas fa-angle-right me-2" /> Testimonials
                    </a>
                    <a href="contact.html">
                      <i className="fas fa-angle-right me-2" /> Contact
                    </a>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-4">
                  <div className="footer-item">
                    <h4 className="mb-4 text-white">Instagram</h4>
                    <div className="row g-3">
                      {/* Instagram Images */}
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div className="col-4" key={num}>
                          <div className="footer-instagram rounded">
                            <img
                              src={`img/instagram-footer-${num}.jpg`}
                              className="img-fluid w-100"
                              alt=""
                            />
                            <div className="footer-search-icon">
                              <a
                                href={`img/instagram-footer-${num}.jpg`}
                                data-lightbox={`footerInstagram-${num}`}
                                className="my-auto"
                              >
                                <i className="fas fa-link text-white" />
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="pt-5"
              style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}
            >
              <div className="row g-0">
                <div className="col-12">
                  <div className="row g-4">
                    {/* Contact Info */}
                    {[
                      {
                        icon: "fas fa-map-marker-alt",
                        title: "Address",
                        text: "123 Street London, UK",
                      },
                      {
                        icon: "fas fa-envelope",
                        title: "Mail Us",
                        text: "contact@ammcsolutions.co.uk",
                      },
                      {
                        icon: "fa fa-phone-alt",
                        title: "Telephone",
                        text: "(+44) 7380328132 (+44) 7506701546",
                      },
                    ].map((info, index) => (
                      <div
                        className="col-lg-6 col-xl-4"
                        key={index}
                      >
                        <div className="d-flex">
                          <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                            <i className={`${info.icon} fa-2x`} />
                          </div>
                          <div>
                            <h4 className="text-white">{info.title}</h4>
                            <p className="mb-0">{info.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="footer-item">
              <h4 className="text-white mb-4">Newsletter</h4>
              <div className="position-relative rounded-pill mb-4">
                <input
                  className="form-control rounded-pill w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Enter your email"
                />
                <button
                  type="button"
                  className="btn btn-primary rounded-pill position-absolute top-0 end-0 py-2 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
              <div className="d-flex flex-shrink-0">
                <div className="footer-btn">
                  <a
                    href="#"
                    className="btn btn-lg-square rounded-circle position-relative wow tada"
                    data-wow-delay=".9s"
                  >
                    <i className="fa fa-phone-alt fa-2x" />
                    <div
                      className="position-absolute"
                      style={{ top: 2, right: 12 }}
                    >
                      <span>
                        <i className="fa fa-comment-dots text-secondary" />
                      </span>
                    </div>
                  </a>
                </div>
                <div className="d-flex flex-column ms-3 flex-shrink-0">
                  <span>Call to Our Experts</span>
                  <a href="tel:+447380328132">
                    <span className="text-white">+447380328132</span>
                  </a>
                  <a href="tel:+447506701546">
                    <span className="text-white">+447506701546</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
