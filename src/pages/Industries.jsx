import { Link } from 'react-router-dom';
import '../styles/Industries.css';

const INDUSTRIES = [
  {
    name: 'Financial Services & Fintech',
    body: 'We help financial institutions communicate financial inclusion, innovation, leadership and customer impact through powerful visual storytelling.',
    who: ['Banks', 'Insurance companies', 'Fintechs', 'Investment companies', 'Digital financial-service providers'],
  },
  {
    name: 'Technology & Telecommunications',
    body: 'We help technology companies explain complex innovations through simple, compelling, documentary-quality storytelling.',
    who: ['Telecommunications companies', 'Software & AI companies', 'Cloud & ICT companies', 'Digital transformation companies', 'Technology start-ups'],
  },
  {
    name: 'Infrastructure & Construction',
    body: "We document the people, projects and impact behind Africa's infrastructure development.",
    who: ['Project documentaries', 'Construction progress films', 'Investor communication', 'Community impact stories', 'Project launch films'],
  },
  {
    name: 'Tourism & Hospitality',
    body: "We help tourism organisations and hospitality brands showcase Africa's destinations, experiences and people through cinematic storytelling.",
    who: ['Hotels & lodges', 'Tourism operators', 'Airlines', 'Destination-management companies', 'Conference venues'],
  },
  {
    name: 'Mining & Manufacturing',
    body: "We tell the stories behind Africa's industrial development.",
    who: ['ESG stories', 'Investor films', 'Factory documentaries', 'Community impact films', 'Recruitment content'],
  },
  {
    name: 'NGOs & Development Organisations',
    body: 'We transform development programmes and social-impact initiatives into compelling stories that demonstrate impact to donors, partners and stakeholders.',
    who: ['Education & healthcare', 'Agriculture', "Women's empowerment", 'Youth development', 'Economic empowerment'],
  },
];

export default function Industries() {
  return (
    <>
      <section className="section industries-hero">
        <div className="container">
          <p className="eyebrow">Who we work with</p>
          <h1 className="industries-hero__headline">Six sectors building Africa's next chapter.</h1>
          <p className="industries-hero__lead">
            Every industry has its own language and its own audience. We shape each story to fit both.
          </p>
        </div>
      </section>

      <section className="section section--deep industries-list">
        <div className="container">
          {INDUSTRIES.map((industry) => (
            <article className="industry" key={industry.name}>
              <h2>{industry.name}</h2>
              <p className="industry__body">{industry.body}</p>
              <ul className="industry__who">
                {industry.who.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div className="container cta__row">
          <div>
            <h2 className="cta__headline">Don't see your sector listed?</h2>
            <p>If your organisation is creating change or building something across Africa, we want to hear about it.</p>
          </div>
          <Link to="/contact" className="button button--primary">Talk to us</Link>
        </div>
      </section>
    </>
  );
}
