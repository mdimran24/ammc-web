import Logo from '../logoNoText.svg'
const Footer = () => {
  return (
<div className="container-fluid px-5">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    
    <p className="col-md-4 mb-0 text-muted">AMMC Solutions</p>

            <img
              className=""
              style={{width:'2%'}}
              src={Logo}
              alt=""
            />

    <ul className="nav col-md-4 justify-content-end">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="/about" className="nav-link px-2 text-muted">About Us</a></li>
      <li className="nav-item"><a href="/landlordservices" className="nav-link px-2 text-muted">Landlord Services</a></li>
      <li className="nav-item"><a href="/investorservices" className="nav-link px-2 text-muted">Investor Service</a></li>
      <li className="nav-item"><a href="/contact" className="nav-link px-2 text-muted">Contact Us</a></li>
    </ul>
  </footer>
</div>

  );
};

export default Footer;
