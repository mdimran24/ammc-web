import MiniHero from "../components/MiniHero";
const LandlordServices = () => {


    return(
        <>
        <MiniHero heading = "Landlord Services"/>

    <div className="container min-vh-100 py-5">
  <div className="row gx-5">

    <div className="col-lg-6 px-lg-5">

      <div class="row mt-4">
      <div class=" px-4 px-lg-0">
        <h2 class="text-primary fw-bold">For Landlords – A Hassle-Free, Guaranteed Rental Solution</h2>
        <p>Are you a landlord looking for a secure, long-term rental solution with no hassle? At AMMC Solutions LTD, we provide a company-let service that ensures you receive guaranteed rent every month for the entire duration of our agreement—whether that’s one, two, or three years.</p>
        <h4 className="text-primary">With our service, you no longer have to worry about:</h4>
        <ul class="list-unstyled mt-3 text-secondary ">
          <li class="d-flex align-items-center">
            <i class="fa fa-check text-primary m-4"></i>
            <strong>Void periods – Your rent is paid every month, regardless of occupancy.</strong>
          </li>
          <li class="d-flex align-items-center">
            <i class="fa fa-check text-primary m-4"></i>
            <strong>Late or missed payments – We handle all financial obligations directly.</strong>
          </li>
          <li class="d-flex align-items-center">
            <i class="fa fa-check text-primary m-4"></i>
            <strong>Tenant issues – No need to deal with tenants, as we fully manage the property.</strong>
          </li>
          <li class="d-flex align-items-center">
            <i class="fa fa-check text-primary m-4"></i>
            <strong> Maintenance and upkeep – We take care of general maintenance and ensure your property is well looked after.</strong>
          </li>
          
        </ul>
        <h2 class="text-primary fw-bold mt-4">How It Works:</h2>
        <ul class="list-unstyled mt-3 text-secondary">
          <li class="d-flex align-items-center">
            <i class="fa-solid fa-1 text-primary m-4"></i>
            <strong>Secure a Long-Term Contract – We agree on a fixed-term lease (3–5 years), guaranteeing your rent for the entire period.</strong>
          </li>
          <li class="d-flex align-items-center">
            <i class="fa-solid fa-2 text-primary m-4"></i>
            <strong> Full Property Management – Our team takes over all day-to-day management, including tenant placement, compliance, and upkeep.</strong>
          </li>
          <li class="d-flex align-items-center">
            <i class="fa-solid fa-3 text-primary m-4"></i>
            <strong>No Stress, No Hassle – You sit back and enjoy a consistent, hands-off income, while we handle everything.</strong>
          </li>
        </ul>

        <p class="mt-3">
        At AMMC Solutions LTD, we ensure your property is always maintained to a high standard, with regular inspections and a dedicated team overseeing all compliance and maintenance needs.</p>
        <p>By working with us, you gain the peace of mind that your property is in expert hands, generating reliable, passive income with none of the usual headaches.</p>
        </div>
    </div>

    </div>
    <div className="col-lg-6 ">
      <div className="sticky-top m-0 " style={{ top: "100px" }}>
        <img
          className="img-fluid rounded shadow-lg my-5"
          src="/img/deal-3.jpg"
          alt=""
        />
      </div>
      
    </div>
    
  </div>
</div>
</>

    )
}

export default LandlordServices;