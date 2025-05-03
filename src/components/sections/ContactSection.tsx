import './ContactSection.scss';
import { FiMapPin, FiPhone, FiMail, FiGithub } from 'react-icons/fi';
import { FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const ContactSection = () => (
  <section id="contact" className="contact-section">
    <div className="contact-section-container">
      <h2>☎️ Contact Information</h2>
      <ul className="contact-list">
        <li className="contact-list-item"><FiMapPin className="contact-icon" /> Karachi, Pakistan</li>
        <li className="contact-list-item"><FiPhone className="contact-icon" /> <a className="contact-link" href="tel:+923001234567">+92 300 1234567</a></li>
        <li className="contact-list-item"><FiMail className="contact-icon" /> <a className="contact-link" href="mailto:your.email@example.com">your.email@example.com</a></li>
        <li className="contact-list-item"><FaLinkedin className="contact-icon" /> <a className="contact-link" href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li className="contact-list-item"><FaFacebook className="contact-icon" /> <a className="contact-link" href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li className="contact-list-item"><FiGithub className="contact-icon" /> <a className="contact-link" href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li className="contact-list-item"><FaWhatsapp className="contact-icon" /> <a className="contact-link" href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
      </ul>
    </div>
  </section>
);

export default ContactSection; 