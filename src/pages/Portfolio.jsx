import { useState } from 'react';
import { Link } from 'react-router-dom';
const reelVideo = 'https://res.cloudinary.com/aj7immgb/video/upload/v1789860353/reel-final.mp4';
import '../styles/Portfolio.css';

const PROJECTS = [
  {
    title: 'Empowerment and Recognition of Women in Construction Awards 2026',
    service: 'Event Content Experience',
    location: 'Sandton, Gauteng, South Africa',
    video: reelVideo,
  },
  {
    title: 'Add your project title',
    industry: 'Financial Services & Fintech',
    service: 'Premium Africa Corporate Story',
    location: 'Add location',
    video: null,
  },
  {
    title: 'Add your project title',
    industry: 'Technology & Telecommunications',
    service: 'Corporate Content Partner',
    location: 'Add location',
    video: null,
  },
  {
    title: 'Add your project title',
    industry: 'NGOs & Development',
    service: 'Impact Documentary',
    location: 'Add location',
    video: null,
  },
  {
    title: 'Add your project title',
    industry: 'Tourism & Hospitality',
    service: 'Destination Story',
    location: 'Add location',
    video: null,
  },
  {
    title: 'Add your project title',
    industry: 'Mining & Manufacturing',
    service: 'Factory Documentary',
    location: 'Add location',
    video: null,
  },
];

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState(null);

  const openVideo = (project) => {
    if (project.video) setActiveVideo(project);
  };

  return (
    <>
      <section className="section portfolio-hero">
        <div className="container">
          <p className="eyebrow">Our work</p>
          <h1 className="portfolio-hero__headline">Stories we've helped tell.</h1>
          <p className="portfolio-hero__lead">
            A selection of corporate films, documentaries and campaigns across the sectors we serve.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container portfolio-grid">
          {PROJECTS.map((project, index) => (
            <article
              className={`portfolio-card ${project.video ? 'is-playable' : ''}`}
              key={`${project.title}-${index}`}
              onClick={() => openVideo(project)}
            >
              <div className="portfolio-card__thumb" aria-hidden="true">
                {project.video ? (
                  <video autoPlay muted loop playsInline preload="metadata">
                    <source src={project.video} type="video/mp4" />
                  </video>
                ) : (
                  <span>Coming soon</span>
                )}
              </div>
              <p className="portfolio-card__service">{project.service}</p>
              <h2>{project.title}</h2>
              <p className="portfolio-card__industry">{project.industry}</p>
              {project.location && (
                <p className="portfolio-card__location">{project.location}</p>
              )}
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

      {activeVideo && (
        <div className="video-modal" onClick={() => setActiveVideo(null)}>
          <div className="video-modal__inner" onClick={(e) => e.stopPropagation()}>
            <button
              className="video-modal__close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              ✕
            </button>
            <video controls autoPlay playsInline>
              <source src={activeVideo.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-modal__caption">
              <h3>{activeVideo.title}</h3>
              <p>{activeVideo.location}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}