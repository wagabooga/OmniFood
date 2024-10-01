const Footer = () => {
  return (
    <footer className="footer">
      <div className="container grid grid--footer">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img className="logo" alt="Omnifood logo" src="/src/pages/OmniFood/img/omnifood-logo.png" />
          </a>

          <ul className="social-links">
            <li>
              <a className="footer-link" href="#"><i className="social-icon ion-icon ion-logo-instagram"></i></a>
            </li>
            <li>
              <a className="footer-link" href="#"><i className="social-icon ion-icon ion-logo-facebook"></i></a>
            </li>
            <li>
              <a className="footer-link" href="#"><i className="social-icon ion-icon ion-logo-twitter"></i></a>
            </li>
          </ul>

          <p className="copyright">
            Copyright &copy; <span className="year">2024</span> by Matthew Hu, Inc. All rights reserved.
          </p>
        </div>

        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p>
              <a className="footer-link" href="tel:778-984-4991">778-984-4991</a><br />
              <a className="footer-link" href="mailto:mattyhutwo@gmail.com">mattyhutwo@gmail.com</a>
            </p>
          </address>
        </div>

        {/* Commented out sections for navigation links */}
        {/* 
        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="#">Create account</a></li>
            <li><a className="footer-link" href="#">Sign in</a></li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="#">About Omnifood</a></li>
            <li><a className="footer-link" href="#">For Business</a></li>
            <li><a className="footer-link" href="#">Cooking partners</a></li>
            <li><a className="footer-link" href="#">Careers</a></li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li><a className="footer-link" href="#">Help center</a></li>
            <li><a className="footer-link" href="#">Privacy & terms</a></li>
          </ul>
        </nav>
        */}
      </div>
    </footer>
  );
};

export default Footer;
