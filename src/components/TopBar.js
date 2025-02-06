/* Created this component but gave me a few issues
   so I just added it into the Navbar code, 
   see if you can just add the component in the nav bar code. */
   
const TopBar = () => {
    return (
      
      <div class="container-fluid topbar px-0 px-lg-4 bg-light py-2 d-none d-lg-block">
      <div class="container">
          <div class="row gx-0 align-items-center">
              <div class="col-lg-8 text-center text-lg-start mb-lg-0">
                  <div class="d-flex flex-wrap">
                      <div class="border-end border-primary pe-3">
                          <a href="#" class="text-muted small"><i class="fas fa-map-marker-alt text-primary me-2"></i>London, UK</a>
                      </div>
                      <div class="ps-3">
                          <a href="contact@ammcsolutions.co.uk" class="text-muted small"><i class="fas fa-envelope text-primary me-2"></i>contact@ammcsolutions.co.uk</a>
                      </div>
                  </div>
              </div>
              <div class="col-lg-4 text-center text-lg-end">
                  <div class="d-flex justify-content-end">
                      <div class="d-flex border-primary pe-3">
                      <a className="btn p-0 text-primary me-3" href="https://www.facebook.com/share/1BDStixpr1/?mibextid=LQQJ4d"><i className="fab fa-facebook-f"></i></a>
                      <a className="btn p-0 text-primary me-3" href="https://www.instagram.com/ammcsolutionsltd?igsh=MXFlb2p5OHU4cGZreQ%3D%3D&utm_source=qr"><i className="fab fa-instagram"></i></a>
                          <a class="btn p-0 text-primary me-0" href="https://www.linkedin.com/in/ammc-solutions-55254b349/"><i class="fab fa-linkedin-in"></i></a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
  };
  
  export default TopBar;
  