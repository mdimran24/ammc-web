export default function ServiceStart() {
  return (
    <div className="container-fluid service py-5">
      <div className="container py-4">
        {/* Section Title */}
        <div
          className="text-center mx-auto pb-5 wow fadeInUp"
          data-wow-delay="0.2s"
          style={{ maxWidth: 800 }}
        >
          <h4 className="text-primary">Our Services</h4>
          <h1 className="display-4 mb-4">
            Comprehensive Solutions for Property Owners & Investors
          </h1>
          <p className="mb-0">
            At AMMC Solutions, we offer a range of services tailored to
            landlords and investors. Our team provides expert support, helping
            you maximize your investments and ensure seamless property
            management.
          </p>
        </div>

        {/* Services Row */}
        <div className="row g-4 justify-content-center">
          {/* Landlord Services */}
          <div className="col-md-6 col-lg-6 col-xl-6 wow fadeInUp" data-wow-delay="0.2s">
            <div className="service-item h-100 d-flex flex-column position-relative">
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
              <div className="service-content p-4 flex-grow-1 d-flex flex-column position-relative text-dark hover:text-white">
                <div className="service-content-inner flex-grow-1">
                  <a href="/landlordservices" className="d-inline-block h4 mb-3 service-title">
                    Landlord Services
                  </a>
                  <p className="mb-4 service-text">
                    From tenant management to maintenance, we handle all aspects
                    of property management for landlords.
                  </p>
                </div>
                <div>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4 mt-auto position-relative"
                    href="/landlordservices"
                    style={{ zIndex: 100 }}
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Investor Services */}
          <div className="col-md-6 col-lg-6 col-xl-6 wow fadeInUp" data-wow-delay="0.4s">
            <div className="service-item h-100 d-flex flex-column position-relative">
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
              <div className="service-content p-4 flex-grow-1 d-flex flex-column position-relative text-dark hover:text-white">
                <div className="service-content-inner flex-grow-1">
                  <a href="/investorservices" className="d-inline-block h4 mb-3 service-title">
                    Investor Services
                  </a>
                  <p className="mb-4 service-text">
                    Tailored investment strategies and market insights to help
                    you grow your portfolio.
                  </p>
                </div>
                <div>
                  <a
                    className="btn btn-primary rounded-pill py-2 px-4 mt-auto position-relative"
                    href="/investorservices"
                    style={{ zIndex: 100 }}
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
