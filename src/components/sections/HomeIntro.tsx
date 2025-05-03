import './HomeIntro.scss';

const HomeIntro = () => (
  <section id="home" className="section">
    <div className="container home-intro-container">
      <h1 className="home-intro-title">🚀 Hey, I'm Ahsan</h1>
      <p>
        I'm a <b>Software Engineer</b> with 3+ years of experience building
        scalable, high-performance web apps. I specialize in:
      </p>
      <ul className="home-intro-list">
        <li>
          ✅ <b>Backend Development</b> – Ruby on Rails &amp; .NET Core for
          secure, high-speed APIs and microservices.
        </li>
        <li>
          ✅ <b>Frontend Development</b> – Vue.js, React, jQuery for responsive
          interfaces with SEO-optimized performance.
        </li>
        <li>
          ✅ <b>Cloud &amp; DevOps</b> – AWS (EC2, S3, Lambda) &amp; Heroku for
          automated deployments and scaling.
        </li>
        <li>
          ✅ <b>SEO &amp; Analytics</b> – Google Analytics, Search Console
          integration for traffic insights, and search engines, indexing, and
          crawling.
        </li>
        <li>
          ✅ <b>Software Maintenance</b> – Raygun, logging, and performance
          tuning to maximize uptime.
        </li>
      </ul>
      <p>
        I deliver clean, maintainable code focusing on scalable architecture and
        technical performance. Need a:
      </p>
      <ul className="home-intro-list-secondary">
        <li>1️⃣ Full-stack web app?</li>
        <li>2️⃣ Backend API or database optimization?</li>
        <li>3️⃣ Frontend overhaul or cloud migration?</li>
      </ul>
      <p>
        <b>Let's build something amazing!</b>
      </p>
      <p className="home-intro-cta">
        <strong>Message me today for a free consultation.</strong>
      </p>
    </div>
  </section>
);

export default HomeIntro;
