export default function HeroSection() {
  return (
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
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="row gy-4 gy-lg-0 gx-0 gx-lg-5 align-items-center">
          <div className="col-lg-5 animated fadeInRight text-end">
            <div className="calrousel-img">
              <img src="/img/Logo.png" className="img-fluid w-100 max-w-xs md:max-w-sm" alt="AMMC Logo" />
            </div>
          </div>

          <div className="col-lg-7 animated fadeInLeft text-white text-end ms-auto">
            <h4 className="text-uppercase fw-bold mb-4 text-white">
              Welcome To AMMC Solutions
            </h4>
            <h1 className="text-uppercase fw-bold mb-4 text-white">
              Tailored Property Solutions, Built Around You.
            </h1>
            <p className="mb-5 fs-5 text-light">
              Your trusted partner in property management and investment.
              AMMC Solutions provides innovative, client-focused services
              designed to simplify your journey and maximize your success.
            </p>
            <div className="d-flex justify-content-end flex-shrink-0 mb-4 space-x-4">
              <a
                className="btn btn-light rounded-pill py-3 px-4 px-md-5"
                href="#"
              >
                Free Consultation
              </a>
              <a
                className="btn btn-dark rounded-pill py-3 px-4 px-md-5"
                href="about.html"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
