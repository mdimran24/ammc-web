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
                  For Landlords – A Hassle-Free, Guaranteed Rental Solution
Are you a landlord looking for a secure, long-term rental solution with no hassle? At AMMC Solutions LTD, we provide a company-let service that ensures you receive guaranteed rent every month for the entire duration of our agreement—whether that’s one, two, or three years.

With our service, you no longer have to worry about:
</p>
<ul className="mb-4">
<li>Void periods – Your rent is paid every month, regardless of occupancy.</li>
<li>Late or missed payments – We handle all financial obligations directly.</li>
<li>Tenant issues – No need to deal with tenants, as we fully manage the property.</li>
<li>Maintenance and upkeep – We take care of general maintenance and ensure your property is well looked after.</li>
</ul>

How It Works:
<ul>
<li>Secure a Long-Term Contract – We agree on a fixed-term lease (1–3 years), guaranteeing your rent for the entire period.</li>
<li>Full Property Management – Our team takes over all day-to-day management, including tenant placement, compliance, and upkeep.</li>
<li>No Stress, No Hassle – You sit back and enjoy a consistent, hands-off income, while we handle everything.</li>
</ul>
<p className="mt-4">
At AMMC Solutions LTD, we ensure your property is always maintained to a high standard, with regular inspections and a dedicated team overseeing all compliance and maintenance needs.

By working with us, you gain the peace of mind that your property is in expert hands, generating reliable, passive income with none of the usual headaches.
</p>

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
