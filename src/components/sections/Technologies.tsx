import { FaReact, FaVuejs, FaAws, FaGitAlt } from 'react-icons/fa';
import { SiRubyonrails, SiDotnet, SiTypescript, SiJquery, SiHeroku, SiGoogleanalytics, SiMysql, SiGooglesearchconsole } from 'react-icons/si';
import './Technologies.scss';

const Technologies = () => (
  <section id="technologies" className="section technology-section">
    <div className="container">
      <h2>👾 Technologies</h2>
      <p>Here are some of the main technologies and tools I work with:</p>
      <ul className="technology-list">
        <li><FaReact /> React</li>
        <li><FaVuejs /> Vue.js</li>
        <li><SiJquery /> jQuery</li>
        <li><SiTypescript /> TypeScript</li>
        <li><SiRubyonrails /> Ruby on Rails</li>
        <li><SiMysql /> MySQL</li>
        <li><SiDotnet /> .NET Core</li>
        <li><FaAws /> AWS</li>
        <li><SiHeroku /> Heroku</li>
        <li><SiGoogleanalytics /> Google Analytics</li>
        <li><SiGooglesearchconsole /> Google Search Console</li>
        <li><FaGitAlt /> Git</li>
      </ul>
    </div>
  </section>
);

export default Technologies; 