import { useState } from 'react';
import '../styles/Contact.css';

const SERVICE_OPTIONS = [
  'Premium Africa Corporate Story',
  'Corporate Content Partner',
  'Event Content Experience',
  'Premium Africa Impact Documentary',
  'Not sure yet',
];

const WHATSAPP_NUMBER = '250785351360'; // form enquiries go here — no +, no spaces

const PHONE_NUMBERS = [
  { display: '+250 781 047 248', tel: '+250781047248', wa: '250781047248' },
  { display: '+250 785 351 360', tel: '+250785351360', wa: '250785351360' },
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

    const text = [
      `New enquiry from DD Films website`,
      ``,
      `Name: ${form.name}`,
      `Organisation: ${form.organisation}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      ``,
      `Message:`,
      form.message,
    ].join('\n');

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

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
              <a href="mailto:hello@ddfilmsandmedia.org">hello@ddfilmsandmedia.org</a>
            </div>
            <div>
              <p className="contact__label">Phone / WhatsApp</p>
              {PHONE_NUMBERS.map(({ display, tel, wa }) => (
                <div className="contact__phone" key={tel}>
                  <a href={`tel:${tel}`}>{display}</a>
                  <a
                    href={`https://wa.me/${wa}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__wa"
                    aria-label={`Chat with us on WhatsApp at ${display}`}
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contact__form-wrap">
          {status === 'sent' ? (
            <div className="contact__success">
              <h2>Almost done.</h2>
              <p>
                WhatsApp should have opened in a new tab with your message ready to send.
                Just hit send and we'll get back to you shortly.
              </p>
              <button
                className="button button--outline"
                onClick={() => {
                  setForm(initialForm);
                  setStatus('idle');
                }}
              >
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

              <button type="submit" className="button button--primary">Send via WhatsApp</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}