import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div>
          <h1>Welcome to the Archdiocese of Cebu</h1>
          <p>Serving the faithful since 1594</p>
        </div>
      </section>

      <section className="container">
        <h2 className="section-title">Our Mission</h2>
        <p style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto', lineHeight: '1.8'}}>
          The Archdiocese of Cebu is a community of believers committed to spreading the Gospel,
          serving the poor, and building a compassionate church. We invite you to join us in our
          journey of faith.
        </p>
      </section>

      <section className="container">
        <h2 className="section-title">Quick Links</h2>
        <div className="card-grid">
          <div className="card">
            <h3>Mass Schedule</h3>
            <p>Find Mass times at parishes across the Archdiocese.</p>
            <Link href="/parishes" className="btn" style={{display: 'inline-block', marginTop: '1rem'}}>View Schedule</Link>
          </div>
          <div className="card">
            <h3>About Us</h3>
            <p>Learn about our history, leadership, and mission.</p>
            <Link href="/about" className="btn" style={{display: 'inline-block', marginTop: '1rem'}}>Learn More</Link>
          </div>
          <div className="card">
            <h3>News & Events</h3>
            <p>Stay updated with the latest news and events.</p>
            <Link href="/news" className="btn" style={{display: 'inline-block', marginTop: '1rem'}}>View News</Link>
          </div>
        </div>
      </section>
    </main>
  )
}