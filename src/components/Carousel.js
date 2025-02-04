export default function Carousel() {
    return(
  <div className="header-carousel owl-carousel">
      {/* <div class="header-carousel-item" style={{backgroundColor: '#000000'}}>  */}

    <div
      className="header-carousel-item"
      style={{
        backgroundImage: 'url("img/Property4.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="carousel-caption">
        <div className="container">
          <div className="row gy-4 gy-lg-0 gx-0 gx-lg-5 align-items-center">
            <div className="col-lg-5 animated fadeInLeft">
              <div className="calrousel-img">
                <img src="img/Logo.png" className="img-fluid w-100" alt />
              </div>
            </div>
            <div className="col-lg-7 animated fadeInRight">
              <div className="text-sm-center text-md-end">
                <h4 className="text-white text-uppercase fw-bold mb-4">
                  Welcome To AMMC Solutions
                </h4>
                <h1 className="text-white text-uppercase fw-bold mb-4">
                  Tailored Property Solutions, Built Around You.
                </h1>
                {/* <h1 class="display-1 text-white mb-4">Tailored Property Solutions, Built Around You.</h1> */}
                <p className="mb-5 fs-5">
                  Your trusted partner in property management and investment.
                  AMMC Solutions provides innovative, client-focused services
                  designed to simplify your journey and maximize your success.
                </p>
                <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                  <a
                    className="btn btn-light rounded-pill py-3 px-4 px-md-5 me-2"
                    href="#"
                  >
                    {" "}
                    Free Consultation
                  </a>
                  <a
                    className="btn btn-dark rounded-pill py-3 px-4 px-md-5 ms-2"
                    href="about.html"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
    </div>
  </div>
    )
}
