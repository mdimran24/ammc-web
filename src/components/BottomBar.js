
export default function BottomBar () {
  return(
<div className="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
  <div className="container">
    <div className="row gx-0 align-items-center">
      <div className="col-lg-8 text-center text-lg-start mb-lg-0">
        <div className="d-flex flex-wrap">
          <div className="border-end border-primary pe-3">
            <a href="#" className="text-muted small"><i className="fas fa-map-marker-alt text-primary me-2" />London, UK</a>
          </div>
          <div className="ps-3">
            <a href="mailto:example@gmail.com" className="text-muted small"><i className="fas fa-envelope text-primary me-2" />ammc@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 text-center text-lg-end">
        <div className="d-flex justify-content-end">
          <div className="d-flex border-primary pe-3">
            <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-facebook-f" /></a>
            <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-twitter" /></a>
            <a className="btn p-0 text-primary me-3" href="#"><i className="fab fa-instagram" /></a>
            <a className="btn p-0 text-primary me-0" href="#"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )

}