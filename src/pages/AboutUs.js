
export default function Home(){
    return (
        <div>
    <div
      className="relative w-full min-h-screen flex items-center justify-end pt-24 md:pt-32"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4)), url("/img/Property4.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12  ">
        <div className="row gy-4 gy-lg-0 gx-0 gx-lg-5 align-items-center">

          <div className="col-lg-7 animated fadeInLeft text-white text-end ms-auto">

            <h1 className="text-uppercase fw-bold mb-5 text-white py-5">
              About Us
            </h1>
          </div>
        </div>
      </div>
    </div>
            
<div>
  <div className="container-fluid bg-light about pb-5">
    <div className="container pb-5">
      <div className="row g-5">
        <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
          <div className="about-item-content bg-white rounded p-5 h-100">
            <h4 className="text-primary">About AMMC Solutions</h4>
            <h1 className="display-4 mb-4">Dedicated to Your Property Success</h1>
            <p>
              Founded by two experienced property professionals, AMMC Solutions is dedicated to delivering exceptional services 
              to landlords and investors. Our expertise in property management and investment ensures we provide value-driven 
              solutions tailored to our clients' needs.
            </p>
            <p>
              We pride ourselves on offering personalized, bespoke services to help you achieve your property and investment goals.
            </p>
            <p className="text-dark"><i className="fa fa-check text-primary me-3" /> Personalized property management services.</p>
            <p className="text-dark"><i className="fa fa-check text-primary me-3" /> Expert advice for property investors.</p>
            <p className="text-dark mb-4"><i className="fa fa-check text-primary me-3" /> Transparent and reliable support.</p>
          </div>
        </div>
        <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
          <div className="bg-white rounded p-5 h-100">
            <div className="row g-4 justify-content-center">
              <div className="col-12">
                <div className="rounded bg-light">
                  <img src="img/about-1.png" className="img-fluid rounded w-100" alt="About Image" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item bg-light rounded p-3 h-100">
                  <div className="counter-counting">
                    <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">50</span>
                    <span className="h1 fw-bold text-primary">+</span>
                  </div>
                  <h4 className="mb-0 text-dark">Happy Clients</h4>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item bg-light rounded p-3 h-100">
                  <div className="counter-counting">
                    <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">25</span>
                    <span className="h1 fw-bold text-primary">+</span>
                  </div>
                  <h4 className="mb-0 text-dark">Managed Properties</h4>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item bg-light rounded p-3 h-100">
                  <div className="counter-counting">
                    <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">10</span>
                    <span className="h1 fw-bold text-primary">+</span>
                  </div>
                  <h4 className="mb-0 text-dark">Years of Experience</h4>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="counter-item bg-light rounded p-3 h-100">
                  <div className="counter-counting">
                    <span className="text-primary fs-2 fw-bold" data-toggle="counter-up">15</span>
                    <span className="h1 fw-bold text-primary">+</span>
                  </div>
                  <h4 className="mb-0 text-dark">Team Members</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Feature Start */}
  <div className="container-fluid feature bg-light py-5">
    <div className="container py-5">
      <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: 800}}>
        <h4 className="text-primary">Our Features</h4>
        <h1 className="display-4 mb-4">Empowering Property Owners and Investors</h1>
        <p className="mb-0">
          At AMMC Solutions, we specialize in delivering bespoke property management and investment services.
          Our goal is to simplify property ownership and maximize returns for landlords and investors alike.
        </p>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
          <div className="feature-item p-4 pt-0">
            <div className="feature-icon p-4 mb-4">
              <i className="far fa-handshake fa-3x" />
            </div>
            <h4 className="mb-4">Trusted Expertise</h4>
            <p className="mb-4">
              With years of experience in the property sector, we provide reliable and personalized solutions tailored to your needs.
            </p>
            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.4s">
          <div className="feature-item p-4 pt-0">
            <div className="feature-icon p-4 mb-4">
              <i className="fa fa-chart-line fa-3x" />
            </div>
            <h4 className="mb-4">Maximized ROI</h4>
            <p className="mb-4">
              We help investors achieve the highest returns through strategic property management and innovative investment solutions.
            </p>
            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.6s">
          <div className="feature-item p-4 pt-0">
            <div className="feature-icon p-4 mb-4">
              <i className="fa fa-cogs fa-3x" />
            </div>
            <h4 className="mb-4">Tailored Solutions</h4>
            <p className="mb-4">
              Every property and investor is unique. We create bespoke strategies to ensure optimal success for our clients.
            </p>
            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.8s">
          <div className="feature-item p-4 pt-0">
            <div className="feature-icon p-4 mb-4">
              <i className="fa fa-user-clock fa-3x" />
            </div>
            <h4 className="mb-4">24/7 Support</h4>
            <p className="mb-4">
              Our dedicated team is available around the clock to assist you, ensuring seamless property management at all times.
            </p>
            <a className="btn btn-primary rounded-pill py-2 px-4" href="#">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}