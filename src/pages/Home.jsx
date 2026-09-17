import { Link } from 'react-router-dom';
import '../styles/Home.css';

const REASONS = [
  { title: 'An African perspective', body: 'We understand Africa, its people, its challenges, its opportunities and its stories.' },
  { title: 'International production standards', body: 'We combine African storytelling with production values suitable for international audiences.' },
  { title: 'A story-first approach', body: "We don't simply produce beautiful images. We find the story behind the images." },
  { title: 'Client-centric', body: 'We work closely with our clients to understand their vision, objectives and audience.' },
  { title: 'Reliable delivery', body: 'We value professionalism, clear communication and timely delivery.' },
  { title: 'Built for African organisations', body: 'We exist to help companies, institutions and development organisations tell their stories with clarity and impact.' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div>
            <p className="eyebrow">Kigali, Rwanda</p>
            <h1 className="hero__headline">
              Telling vivid African stories through our lenses.
            </h1>
            <p className="hero__lead">
              DD Films and Media is a new film and media company producing corporate films, documentaries
              and digital content for organisations building Africa and telling its stories to the world.
            </p>
            <div className="hero__actions">
              <Link to="/contact" className="btn btn--primary">Tell us your story</Link>
              <Link to="/services" className="btn btn--outline">See our services</Link>
            </div>
          </div>
          <div className="hero__frame">
            <img
              src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80"
              alt="Film production in Africa"
            />
            <div className="hero__frame-overlay">
              <span>Vision</span>
              <p>To showcase the beauty, innovation, resilience and success stories of Africa to the world.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container who__grid">
          <div>
            <p className="eyebrow">What we do</p>
            <h2 className="who__heading">
              Corporate films, documentaries and visual storytelling, made in Africa.
            </h2>
          </div>
          <div className="who__body">
            <p>
              We produce corporate films, impact documentaries, event content and ongoing digital content
              for organisations across Africa.
            </p>
            <p>
              We work with businesses, development organisations, institutions and entrepreneurs to
              transform their projects, people and impact into compelling visual stories — built for
              African audiences and international standards.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section section--ink">
        <div className="container">
          <p className="eyebrow">Why DD Films and Media</p>
          <h2 className="reasons__heading">What we bring to every project.</h2>
          <div className="reasons__grid">
            {REASONS.map((reason) => (
              <div className="reasons__item" key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="section section--deep promise">
        <div className="container promise__grid">
          <div>
            <p className="eyebrow">Our promise</p>
            <h2 className="promise__headline">We don't just create videos. We create stories that move people.</h2>
          </div>
          <ul className="promise__list">
            <li>Build trust</li>
            <li>Communicate impact</li>
            <li>Attract customers</li>
            <li>Engage investors</li>
            <li>Strengthen their brand</li>
            <li>Showcase Africa to the world</li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta">
        <div className="container cta__row">
          <div>
            <h2 className="cta__headline">Your story deserves to be told.</h2>
            <p>
              Whether you're building a company, launching a project, developing infrastructure, creating
              social impact or transforming lives across Africa — let's talk.
            </p>
          </div>
          <Link to="/contact" className="btn btn--primary">Start a conversation</Link>
        </div>
      </section>
    </>
  );
}