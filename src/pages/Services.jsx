import { Link } from 'react-router-dom';
import '../styles/Services.css';

const SERVICES = [
  {
    name: 'Premium Africa Corporate Story',
    summary: 'A complete corporate storytelling campaign that communicates who you are, what you do and the impact you create.',
    includes: [
      'Corporate / brand film',
      'Executive interviews',
      '5–8 social media videos',
      'Professional photography',
      'Drone footage where appropriate',
      'Motion graphics & subtitles',
      'YouTube and LinkedIn-ready versions',
      'Content strategy',
    ],
    investment: 'From $7,500',
    note: 'Final investment depends on production requirements, locations, crew and deliverables.',
  },
  {
    name: 'Corporate Content Partner',
    summary: 'Your outsourced corporate content team — consistent, professional content without an in-house production team. Minimum 3-month engagement.',
    includes: [
      '8–12 short-form videos per month',
      '1 long-form video per month',
      'Executive / interview content',
      'Professional photography',
      'Motion graphics',
      'LinkedIn content & YouTube editing',
      'Monthly content strategy and planning',
    ],
    investment: 'From $3,500/month',
    note: '3-month minimum: $10,500. Custom packages available for larger organisations.',
  },
  {
    name: 'Event Content Experience',
    summary: 'For conferences, corporate events, summits and launches — content that keeps working long after the event ends.',
    includes: [
      'Event filming',
      'Speaker interviews',
      'Same-day / next-day social clips',
      'Professional photography',
      'Highlight video',
      'Sponsor interviews',
      '10–15 short-form reels',
      'Event after-movie',
    ],
    investment: 'From $3,500',
    note: 'Custom packages available depending on event size, duration and location.',
  },
  {
    name: 'Premium Africa Impact Documentary',
    summary: 'For organisations creating measurable change across Africa — documented in a compelling documentary format.',
    includes: [
      'Donor communication',
      'Investor relations',
      'ESG communication',
      'Corporate communications',
      'Stakeholder engagement',
      'Campaigns and public awareness',
    ],
    investment: 'From $7,500',
    note: 'Large-scale productions are quoted separately.',
  },
];

export default function Services() {
  return (
    <>
      <section className="section services-hero">
        <div className="container">
          <p className="eyebrow">What we offer</p>
          <h1 className="services-hero__headline">Four ways to tell your story, built around your goals.</h1>
          <p className="services-hero__lead">
            From a single corporate film to an ongoing content partnership, each service is scoped around
            your organisation's audience, timeline and impact.
          </p>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          {SERVICES.map((service, index) => (
            <article className="service" key={service.name}>
              <div className="service__index">{String(index + 1).padStart(2, '0')}</div>
              <div className="service__body">
                <h2>{service.name}</h2>
                <p className="service__summary">{service.summary}</p>
                <ul className="service__includes">
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="service__price">
                <p className="service__investment">{service.investment}</p>
                <p className="service__note">{service.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div className="container cta__row">
          <div>
            <h2 className="cta__headline">Not sure which service fits?</h2>
            <p>Tell us about your organisation and what you're trying to communicate — we'll recommend a starting point.</p>
          </div>
          <Link to="/contact" className="button button--primary">Get a recommendation</Link>
        </div>
      </section>
    </>
  );
}
