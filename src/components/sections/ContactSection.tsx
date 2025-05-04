import './ContactSection.scss';
import { FiMapPin, FiPhone, FiMail, FiGithub } from 'react-icons/fi';
import { FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => (
  <section id="contact" className="contact-section">
    <div className="contact-section-container">
      <h2>☎️ Contact Information</h2>
      <ul className="contact-list">
        <li className="contact-list-item">
          <FiMapPin className="contact-icon" /> Lahore, Pakistan
        </li>
        <li className="contact-list-item">
          <FiPhone className="contact-icon" />{" "}
          <a className="contact-link" href="tel:+923034658867">
            +92 303 4658867
          </a>
        </li>
        <li className="contact-list-item">
          <FiMail className="contact-icon" />{" "}
          <a className="contact-link" href="mailto:dev.ahsan.mehmood@gmail.com">
            dev.ahsan.mehmood@gmail.com
          </a>
        </li>
        <li className="contact-list-item">
          <FaLinkedin className="contact-icon" />{" "}
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/ahsan-mehmood-4078b31ab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li className="contact-list-item">
          <FaFacebook className="contact-icon" />{" "}
          <a
            className="contact-link"
            href="https://www.facebook.com/profile.php?id=100005119008659"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </li>
        <li className="contact-list-item">
          <FiGithub className="contact-icon" />{" "}
          <a
            className="contact-link"
            href="https://github.com/veryahsan"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li className="contact-list-item">
          <FaWhatsapp className="contact-icon" />{" "}
          <a
            className="contact-link"
            href="https://wa.me/923034658867"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </li>
      </ul>
    </div>
  </section>
);

export default ContactSection; 