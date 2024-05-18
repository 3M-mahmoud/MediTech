import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container  text-center text-md-start text-white ">
        <div className="row">
          <div className=" col-md-6 col-lg-5 ">
            <div className="logo d-flex">
              <i className="fa-solid fa-stethoscope icon pe-4"></i>
              <h3>MediTech</h3>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="links">
              <h5>Company</h5>
              <ul className="list-unstyled lh-lg">
                <li>About</li>
                <li>Contact Us</li>
                <li>Where to find us?</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="links">
              <h5>Categories</h5>
              <ul className="list-unstyled lh-lg">
                <li>Join us as a doctor</li>
                <li>Pricing</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-2">
            <div className="links">
              <ul className="list-unstyled lh-lg">
                <li>Downloads</li>
                <li>Our Doctors</li>
                <li>Patients Reviews</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="row  d-flex  text-white">
          <div className="social col-lg-9  ps-5">
            <i className="fa-brands fa-whatsapp pe-3 "></i>
            <i className="fa-brands fa-facebook-f "></i>
          </div>
          <div className="links-right col-lg-3 ">
            <ul className="list-unstyled lh-lg d-flex ">
              <li className="pe-3">privacy policy</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
