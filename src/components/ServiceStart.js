export default function ServiceStart() {
  return (
    <div className="container-fluid service py-5">
      <div className="container-fluid py-5 px-4">
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Our Services</h4>
          <h1 className="display-4 mb-4">
            Comprehensive Solutions for Property Owners &amp; Investors
          </h1>
          <p className="mb-0">
            At AMMC Solutions, we offer a range of services tailored to
            landlords and investors. Our team provides expert support, helping
            you maximize your investments and ensure seamless property
            management.
          </p>
        </div>
        
        <div className="row g-4 justify-content-center">
          <div
            className="col-md-6 col-lg-6 col-xl-6 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="service-item">
              <div className="service-img">
                <img
                  src="img/landlord-services.jpeg"
                  className="img-fluid rounded-top w-100"
                  alt="Landlord Services"
                />
                <div className="service-icon p-3">
                  <i className="fa fa-user-tie fa-2x" />
                </div>
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a href="#" className="d-inline-block h4 mb-4">
                    Landlord Services
                  </a>
                  <p className="mb-4">
                  From tenant management to maintenance, we handle all aspects of property management for landlords.
                  </p>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-6 col-xl-6 wow fadeInUp"
            data-wow-delay="0.4s"
          >
            <div className="service-item">
              <div className="service-img">
                <img
                  src="img/investor-services.jpeg"
                  className="img-fluid rounded-top w-100"
                  alt="Investor Services"
                />
                <div className="service-icon p-3">
                  <i className="fa fa-chart-bar fa-2x" />
                </div>
              </div>
              <div className="service-content p-4">
                <div className="service-content-inner">
                  <a href="#" className="d-inline-block h4 mb-4">
                    Investor Services
                  </a>
                  <p className="mb-4">
                    Tailored investment strategies and market insights to help
                    you grow your portfolio.
                  </p>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4"
                    href="#"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
