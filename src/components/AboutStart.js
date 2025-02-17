export default function AboutStart() {
  return (
    <div className="bg-light  pb-5">
      <div className="container pb-5">
        <div className=" g-5">
          <div className=" wow fadeInLeft" data-wow-delay="0.2s">
            <div className="about-item-content bg-white rounded p-5 h-100">
              <h4 className="text-primary">About AMMC Solutions</h4>
              <h1 className="display-4 mb-4">
                Dedicated to Your Property Success
              </h1>
              <p>
                At AMMC Solutions LTD, we specialize in sourcing and managing
                high-yield property deals in London, offering tailored solutions
                for both landlords and investors. Our expertise in the property
                market allows us to secure exclusive, hassle-free, company-let
                opportunities that provide guaranteed rental income for
                landlords and high-return investments for investors.
              </p>
              <p className="text-dark">
                <i className="fa fa-check text-primary me-3" /> Personalized
                property management services.
              </p>
              <p className="text-dark">
                <i className="fa fa-check text-primary me-3" /> Expert advice
                for property investors.
              </p>
              <p className="text-dark mb-4">
                <i className="fa fa-check text-primary me-3" /> Transparent and
                reliable support.
              </p>
              <div style={{ overflow: "auto" }} id="nextprevious">
                <div style={{ float: "right" }}>
                  <div class="clearfix pt-3">
                    <a href="/contact">
                    <button class="btn btn-primary p-3 px-5 rounded-pill" >
                      Get In Touch
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
