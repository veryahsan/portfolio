import { FC } from 'react';
import { useStore } from '../../store/useStore';
import { FiSun, FiMoon } from 'react-icons/fi';
import './Navbar.scss';

const Navbar: FC = () => {
  const { isDarkMode, toggleTheme, currentSection, setCurrentSection } = useStore();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setCurrentSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="container navbar__container">
        <div className="navbar__logo">
          <a href="#" onClick={e => handleNavClick(e, 'home')}>
            <span className="logo-brackets">&lt; &gt;</span>
          </a>
        </div>
        
        <ul className="navbar__links">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href="/"
                className={currentSection === item.id ? 'active' : ''}
                onClick={e => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="navbar__theme-toggle" onClick={toggleTheme}>
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 