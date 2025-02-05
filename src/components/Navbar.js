import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      {/* TopBar */}
      <div className="container-fluid topbar px-0 px-lg-4 bg-light py-2">
        <div className="container">
          <div className="row gx-0 align-items-center">
            {/* Location & Email */}
            <div className="col-lg-8 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <div className="border-end border-primary pe-3">
                  <a href="#" className="text-muted small">
                    <i className="fas fa-map-marker-alt text-primary me-2"></i> London, UK
                  </a>
                </div>
                <div className="ps-3">
                  <a href="mailto:ammc@gmail.com" className="text-muted small">
                    <i className="fas fa-envelope text-primary me-2"></i> contact@ammcsolutions.co.uk
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex justify-content-end">
                <div className="d-flex border-primary pe-3">
                  <a className="btn p-0 text-primary me-3" href="https://www.facebook.com/share/1BDStixpr1/?mibextid=LQQJ4d"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn p-0 text-primary me-3" href="https://www.instagram.com/ammcsolutionsltd?igsh=MXFlb2p5OHU4cGZreQ%3D%3D&utm_source=qr"><i className="fab fa-instagram"></i></a>
                  {/* <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn p-0 text-primary me-0" href="#"><i className="fab fa-linkedin-in"></i></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid nav-bar px-0 px-lg-4 py-3 bg-white">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            {/* Logo */}
            <a href="index.html" className="navbar-brand p-0">
              <h4 className="text-primary mb-0">
                <i className="fas fa-building me-2"></i> AMMC Solutions
              </h4>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="navbar-toggler border-0 px-3 py-2 shadow-sm"
              style={{
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="fa fa-bars"></span>
            </button>

            {/* Navbar Links */}
            <div
              className={`collapse navbar-collapse ${mobileMenuOpen ? "show" : ""}`}
              id="navbarCollapse"
            >
              <div className="navbar-nav mx-0 mx-lg-auto">
                <a href="index.html" className="nav-item nav-link active">
                  Home
                </a>
                <a href="about.html" className="nav-item nav-link">
                  About
                </a>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    id="servicesDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="servicesDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="landlord-services.html">
                        Landlord Services
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="investor-services.html">
                        Investor Services
                      </a>
                    </li>
                  </ul>
                </div>
                <a href="testimonial.html" className="nav-item nav-link">
                  Testimonials
                </a>
                <a href="contact.html" className="nav-item nav-link">
                  Contact
                </a>
                <div className="nav-btn px-3">
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0"
                  >
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
