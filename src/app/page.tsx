import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1>St. Vincent Ferrer Parish</h1>
          <p>Welcome to our community of faith</p>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">Our Mission</h2>
        <p style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8'}}>
          St. Vincent Ferrer Parish is a community of believers committed to spreading the Gospel,
          serving the poor, and building a compassionate church. We invite you to join us in our
          journey of faith.
        </p>
      </section>

      <section className="container">
        <h2 className="section-title">Quick Links</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Mass Schedule</h3>
            <p>Find Mass times and service schedules at our parish.</p>
            <Link href="/parishes" className="btn" style={{display: 'inline-block', marginTop: '1rem'}}>View Schedule</Link>
          </div>
          <div className="card">
            <h3>About Us</h3>
            <p>Learn about our history, leadership, and mission.</p>
            <Link href="/about" className="btn" style={{display: 'inline-block', marginTop: '1rem'}}>Learn More</Link>
          </div>
          <div className="card">
            <h3>Contact Us</h3>
            <p>Get in touch with us for any inquiries.</p>
            <Link href="/contact" className="btn" style={{display: 'inline-block', marginTop: '1rem'}}>Get in Touch</Link>
          </div>
        </div>
      </section>
    </main>
  )
}