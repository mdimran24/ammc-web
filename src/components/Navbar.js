import { useState } from "react";
import Logo from '../logoNoText.svg'
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">


      {/* Navbar */}
      <div className="container-fluid nav-bar px-0 px-lg-4 py-3 bg-white">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            {/* Logo */}
            <img className="mx-4 img-fluid custom-logo" src={Logo} alt="" />
<style>
  {`
    .custom-logo {
    max-width: 2.5%;
    }
    @media (max-width: 1000px) {
      .custom-logo {
        max-width: 4%;
        margin-bottom: 18px;
      }
    }
    @media (max-width: 768px) {
      .custom-logo {
        max-width: 6%;
      }
    }
    @media (max-width: 480px) {
      .custom-logo {
        max-width: 8%;
        margin-bottom: 18px;
      }
    }
  `}
</style>
<a href="/" className="navbar-brand p-0">
              <h3 
                className="text-primary mb-lg-0 mb-4 font-weight-bold fw-bolder"
                style={{ fontWeight: "900", letterSpacing: "1px" }}
              >
                AMMC SOLUTIONS
              </h3>
            </a>


            {/* Mobile Menu Button */}
            <button
              className="navbar-toggler border-0 px-3 py-2 shadow-sm mb-4"
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
                <a href="/" className="nav-item nav-link">
                  Home
                </a>
                <a href="/about" className="nav-item nav-link">
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
                      <a className="dropdown-item" href="/landlordservices">
                        Landlord Services
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/investorservices">
                        Investor Services
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <a href="/testimonial" className="nav-item nav-link">
                  Testimonials
                </a> */}
                <a href="/contact" className="nav-item nav-link">
                  Contact
                </a>
                {/* <div className="nav-btn px-3">
                  <a
                    href="#"
                    className="btn btn-primary rounded-pill py-2 px-4 ms-3 flex-shrink-0"
                  >
                    Book a Call
                  </a>
                </div> */}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
