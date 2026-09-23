import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__row">
        <div className="footer__brand">
          <p className="footer__mark">DD Films & Media</p>
          <p className="footer__location">Kigali, Rwanda</p>
          <p className="footer__tagline">Corporate films, documentaries and digital content for organisations building Africa.</p>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Explore</p>
          <Link to="/services">Services</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer__col">
          <p className="footer__heading">Get in touch</p>
          <a href="mailto:hello@ddfilmsandmedia.com">hello@ddfilmsandmedia.com</a>
          <a
            href="https://wa.me/27735349749"
            target="_blank"
            rel="noopener noreferrer"
          >
            +27 73 534 9749
          </a>
          <a
            href="https://wa.me/250785351360"
            target="_blank"
            rel="noopener noreferrer"
          >
            +250 785 351 360
          </a>
        </div>
      </div>

      <div className="container">
        <hr className="divider divider--dark" />
        <p className="footer__copy">© {year} DD Films and Media. All rights reserved.</p>
      </div>
    </footer>
  );
}