import Link from 'next/link'

export default function Contact() {
  return (
    <main>
      <div className="page-header">
        <h1>Contact Us</h1>
      </div>
      <div className="container">
        <div className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
          <h3>St. Vincent Ferrer Church Of Pitalo</h3>
          <p>
            Natalio Bacalso Avenue<br />
            Pitalo, San Fernando 6018<br />
            Cebu, Philippines
          </p>
          <p>
            <strong>Phone:</strong> 2314678<br />
            <strong>Facebook:</strong>{' '}
            <a href="https://www.facebook.com/Snr.SanVicenteFerrerPitalo/" target="_blank" rel="noopener noreferrer">
              fb.com/Snr.SanVicenteFerrerPitalo
            </a>
          </p>
          <p>
            <strong>Supervising Parish:</strong><br />
            San Isidro Labrador Parish Church<br />
            Poblacion, San Fernando, Cebu
          </p>
          <p>
            <strong>Office Hours:</strong><br />
            [To be confirmed with parish office]
          </p>
        </div>

        <div className="contact-form">
          <h2 style={{color: '#8B0000', marginBottom: '1.5rem'}}>Send us a Message</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Your message"></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>

        <div style={{textAlign: 'center', marginTop: '2rem'}}>
          <h3 style={{color: '#8B0000', marginBottom: '1rem'}}>Mass Schedule</h3>
          <p>
            <strong>Sunday:</strong> 10:00 AM & 4:00 PM<br />
            <strong>Weekdays:</strong> Visit the chapel for prayers
          </p>
          <Link href="/mass-schedule" className="btn" style={{display: 'inline-block', marginTop: '1rem'}}>
            View Full Schedule
          </Link>
        </div>
      </div>
    </main>
  )
}