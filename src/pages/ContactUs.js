import ContactImg from '../Logo.jpg'

export default function ContactUs(){
    return(
        <>
<div className="container-fluid contact bg-light py-5">
  <div className="container py-5">
    <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{maxWidth: 800}}>
      <h4 className="text-primary">Contact Us</h4>
      <h1 className="display-4 mb-4">General Enquiry</h1>
    </div>
    <div className="row text-center g-5">
      <div className="col-xl-6 wow fadeInLeft d-flex align-items-center " data-wow-delay="0.2s">
        <div className="contact-img p-5">
          <div className="contact-img-inner">
            <img src={ContactImg} className=" center-block w-75  rounded align-items-center dflex" alt="Image" />
          </div>
        </div>
      </div>
      <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
        <div>
          <h4 className="text-primary">Send Your Message</h4>
 <form action="https://formsubmit.co/6198e2ab0ba1c62252f988cd3279db57" method="POST" class="rounded p-4 mb-4 border shadow-sm">

<div class="mb-3">
    <label class="form-label text-primary fw-bold" for="fname">First Name</label>
    <input name="First_Name" class="form-control" id="fname" type="text" placeholder="First Name" required />
</div>

<div class="mb-3">
    <label class="form-label text-primary fw-bold" for="lname">Last Name</label>
    <input name="last_name" class="form-control" id="lname" type="text" placeholder="Last Name" required />
</div>

<div class="mb-3">
    <label class="form-label text-primary fw-bold" for="email">Email</label>
    <input name="email" type="email" class="form-control" placeholder="example@email.com" required />
</div>

<div class="mb-3">
    <label class="form-label text-primary fw-bold" for="message">Message</label>
    <textarea name="message" id="message" rows="6" class="form-control" placeholder="Your Message" required></textarea>
</div>



<div style={{overflow: 'auto'}} id="nextprevious">
  <div style={{float: 'right'}}>
  <div class="clearfix pt-3">
    <button class="btn btn-primary " type="submit">Submit</button>
</div>
 </div>
</div>

<input type="hidden" name="_subject" value="General Enquiry" />
<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_autoresponse" value="Hi there, we have received your message, we will try to get back to you as soon as possible." />
<input type="hidden" name="_template" value="table" />
<input type="hidden" name="_next" value="https://www.ammcsolutions.co.uk/contact" />

</form>
        </div>
      </div>
      <div className="col-16">
        <div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.2s">
              <div className="contact-add-item">
                <div className="contact-icon text-primary mb-4">
                  <i className="fas fa-map-marker-alt fa-2x" />
                </div>
                <div>
                  <h4>Address</h4>
                  <p className="mb-0">London, UK</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.4s">
              <div className="contact-add-item">
                <div className="contact-icon text-primary mb-4">
                  <i className="fas fa-envelope fa-2x" />
                </div>
                <div>
                  <h4>Mail Us</h4>
                  <p className="mb-0">contact@ammcsolutions.co.uk</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.6s">
              <div className="contact-add-item">
                <div className="contact-icon text-primary mb-4">
                  <i className="fa fa-phone-alt fa-2x" />
                </div>
                <div>
                  <h4>Telephone</h4>
                  <p className="mb-0">(+44) 7380328132</p>
                  <p> (+44) 7506701546</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
                
    </div>
  </div>
</div>

        
        </>
    )
}