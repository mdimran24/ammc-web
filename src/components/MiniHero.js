const MiniHero = ({heading}) => {
  return (
    <>
      <div
        className="relative w-full min-h-screen flex items-center justify-end pt-24 md:pt-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7),rgba(212, 175, 55, 0.5)), url("/img/Property4.jpg")',
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
                {heading}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MiniHero
