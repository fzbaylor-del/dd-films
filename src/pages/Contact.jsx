import { useState } from 'react';
import '../styles/Contact.css';

const SERVICE_OPTIONS = [
  'Premium Africa Corporate Story',
  'Corporate Content Partner',
  'Event Content Experience',
  'Premium Africa Impact Documentary',
  "Not sure yet",
];

const initialForm = {
  name: '',
  organisation: '',
  email: '',
  service: SERVICE_OPTIONS[0],
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sent

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: wire this up to your email service or backend endpoint.
    // For now this simply confirms receipt in the UI.
    setStatus('sent');
  }

  return (
    <section className="section contact">
      <div className="container contact__grid">
        <div className="contact__intro">
          <p className="eyebrow">Let's tell your story</p>
          <h1 className="contact__headline">
            Whether you're building a company, launching a project or creating impact across Africa —
            your story deserves to be told.
          </h1>

          <div className="contact__details">
            <div>
              <p className="contact__label">Studio</p>
              <p>Kigali, Rwanda</p>
            </div>
            <div>
              <p className="contact__label">Email</p>
              <a href="mailto:hello@ddfilmsandmedia.com">hello@ddfilmsandmedia.com</a>
            </div>
            <div>
              <p className="contact__label">Phone</p>
              <a href="tel:+250000000000">+250 000 000 000</a>
            </div>
          </div>
        </div>

        <div className="contact__form-wrap">
          {status === 'sent' ? (
            <div className="contact__success">
              <h2>Message received.</h2>
              <p>Thank you for reaching out — we'll get back to you within two business days.</p>
              <button className="button button--outline" onClick={() => { setForm(initialForm); setStatus('idle'); }}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
              </div>

              <div className="contact__field">
                <label htmlFor="organisation">Organisation</label>
                <input id="organisation" name="organisation" type="text" required value={form.organisation} onChange={handleChange} />
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
              </div>

              <div className="contact__field">
                <label htmlFor="service">Service of interest</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Tell us about your project</label>
                <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} />
              </div>

              <button type="submit" className="button button--primary">Send message</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
