import FeatureStart from "../components/FeatureStart";
import MiniHero from "../components/MiniHero";

export default function Home() {
  return (
    <div>
      <MiniHero heading="About Us" />

      <div>
    <div className="bg-light  pb-5">
      <div className="container pb-5">
        <div className=" g-5">
          <div className=" wow fadeInLeft" data-wow-delay="0.2s">
            <div className="about-item-content bg-white rounded p-5 h-100">
              <h1 className="display-4 mb-4">
                    About AMMC
                  </h1>
                  <p>
                    Founded by two experienced property professionals, AMMC
                    Solutions is dedicated to delivering exceptional services to
                    landlords and investors. Our expertise in property
                    management and investment ensures we provide value-driven
                    solutions tailored to our clients' needs.
                  </p>
                  <p>
                    We pride ourselves on offering personalized, bespoke
                    services to help you achieve your property and investment
                    goals.
                  </p>
                  <p className="text-dark">
                    <i className="fa fa-check text-primary me-3" /> Personalized
                    property management services.
                  </p>
                  <p className="text-dark">
                    <i className="fa fa-check text-primary me-3" /> Expert
                    advice for property investors.
                  </p>
                  <p className="text-dark mb-4">
                    <i className="fa fa-check text-primary me-3" /> Transparent
                    and reliable support.
                  </p>
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Feature Start */}
      <FeatureStart />
      </div>
    </div>
  );
}
