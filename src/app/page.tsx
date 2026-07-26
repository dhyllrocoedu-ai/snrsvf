import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1>San Vicente Ferrer Chapel</h1>
          <p>Pitalo, San Fernando, Cebu</p>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">Our Story</h2>
        <p style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8'}}>
          San Vicente Ferrer Chapel in Pitalo has been a place of pilgrimage and devotion since 1925.
          Built through the faith of our community, the chapel continues to be a spiritual refuge
          for those seeking divine intercession through San Vicente Ferrer.
        </p>
      </section>

      <section className="container">
        <h2 className="section-title">Quick Links</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Mass Schedule</h3>
            <p>Sundays at 10:00 AM & 4:00 PM. Weekday visits welcome.</p>
            <Link href="/mass-schedule" className="btn" style={{display: 'inline-block', marginTop: '1rem'}}>View Schedule</Link>
          </div>
          <div className="card">
            <h3>About Us</h3>
            <p>Learn about our history, the saint, and our community.</p>
            <Link href="/about" className="btn" style={{display: 'inline-block', marginTop: '1rem'}}>Learn More</Link>
          </div>
          <div className="card">
            <h3>Contact Us</h3>
            <p>Get in touch with us for any inquiries.</p>
            <Link href="/contact" className="btn" style={{display: 'inline-block', marginTop: '1rem'}}>Get in Touch</Link>
          </div>
        </div>
      </section>

      <section className="container" style={{background: '#f9f9f9', margin: '0 auto', padding: '2rem', borderRadius: '8px'}}>
        <h2 className="section-title">Devotion to San Vicente Ferrer</h2>
        <p style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8'}}>
          "Not even the flames can destroy our faith."<br />
          <em>— Carmelo Manlosa, President, San Vicente Ferrer Chapel Leaders Association</em>
        </p>
      </section>
    </main>
  )
}