import { Link } from 'react-router-dom';
import '../styles/Portfolio.css';

const PROJECTS = [
  { title: 'Add your project title', industry: 'Financial Services & Fintech', service: 'Premium Africa Corporate Story', placeholder: true },
  { title: 'Add your project title', industry: 'Technology & Telecommunications', service: 'Corporate Content Partner', placeholder: true },
  { title: 'Add your project title', industry: 'NGOs & Development', service: 'Impact Documentary', placeholder: true },
  { title: 'Add your project title', industry: 'Tourism & Hospitality', service: 'Destination Story', placeholder: true },
  { title: 'Add your project title', industry: 'Infrastructure & Construction', service: 'Event Content Experience', placeholder: true },
  { title: 'Add your project title', industry: 'Mining & Manufacturing', service: 'Factory Documentary', placeholder: true },
];

export default function Portfolio() {
  return (
    <>
      <section className="section portfolio-hero">
        <div className="container">
          <p className="eyebrow">Our work</p>
          <h1 className="portfolio-hero__headline">Stories we've helped tell.</h1>
          <p className="portfolio-hero__lead">
            A selection of corporate films, documentaries and campaigns across the sectors we serve.
            Replace these placeholders with your own projects and reels.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container portfolio-grid">
          {PROJECTS.map((project, index) => (
            <article className="portfolio-card" key={`${project.title}-${index}`}>
              <div className="portfolio-card__thumb" aria-hidden="true">
                {project.placeholder && <span>Add thumbnail / reel</span>}
              </div>
              <p className="portfolio-card__service">{project.service}</p>
              <h2>{project.title}</h2>
              <p className="portfolio-card__industry">{project.industry}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div className="container cta__row">
          <div>
            <h2 className="cta__headline">Want to see your story here next?</h2>
            <p>Tell us about your organisation and what you're trying to communicate.</p>
          </div>
          <Link to="/contact" className="button button--primary">Start a project</Link>
        </div>
      </section>
    </>
  );
}