export default function AboutStart(){
    return(
<div className="container-fluid bg-light about pb-5">
  <div className="container pb-5">
    <div className="row g-5">
      <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
        <div className="about-item-content bg-white rounded p-5 h-100">
          <h4 className="text-primary">About AMMC Solutions</h4>
          <h1 className="display-4 mb-4">Dedicated to Your Property Success</h1>
          <p>
          At AMMC Solutions LTD, we specialize in sourcing and managing high-yield property deals in London, 
          offering tailored solutions for both landlords and investors. Our expertise in the property market 
          allows us to secure exclusive, hassle-free, company-let opportunities that provide guaranteed rental income 
          for landlords and high-return investments for investors.
          </p>
          <p className="text-dark"><i className="fa fa-check text-primary me-3" /> Personalized property management services.</p>
          <p className="text-dark"><i className="fa fa-check text-primary me-3" /> Expert advice for property investors.</p>
          <p className="text-dark mb-4"><i className="fa fa-check text-primary me-3" /> Transparent and reliable support.</p>
          <a className="btn btn-primary rounded-pill py-3 px-5" href="#">Get In Touch</a>
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

    )
}