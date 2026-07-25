'use client'

export default function Contact() {
  return (
    <main>
      <div className="page-header">
        <h1>Contact Us</h1>
      </div>
      <div className="container">
        <div className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
          <h3>Archdiocese of Cebu</h3>
          <p>
            Archbishop&apos;s Residence<br />
            Basilica del Santo Niño<br />
            Cebu City, Philippines
          </p>
          <p>
            <strong>Phone:</strong> (032) 123-4567<br />
            <strong>Email:</strong> info@thearchdioceseofcebu.com
          </p>
          <p>
            <strong>Office Hours:</strong><br />
            Monday - Friday: 8:00 AM - 5:00 PM<br />
            Saturday: 8:00 AM - 12:00 NN
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
      </div>
    </main>
  )
}