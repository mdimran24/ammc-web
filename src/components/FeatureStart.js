export default function FeatureStart(){
    return(
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

    )
}