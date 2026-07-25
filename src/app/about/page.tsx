export default function About() {
  return (
    <main>
      <div className="page-header">
        <h1>About Us</h1>
      </div>
      <div className="page-content">
        <h2>Our History</h2>
        <p>
          St. Vincent Ferrer Parish was established to serve the spiritual needs of our community.
          Named after Saint Vincent Ferrer, the Dominican preacher and miracle worker, our parish
          continues his legacy of faith and service.
        </p>

        <h2>Our Pastor</h2>
        <p>
          [Pastor's Name]<br />
          Parish Priest
        </p>

        <h2>Our Mission</h2>
        <p>
          We are committed to:
        </p>
        <ul style={{marginLeft: '2rem', marginBottom: '1rem'}}>
          <li>Proclaiming the Gospel message of salvation</li>
          <li>Celebrating the Eucharist and Sacraments</li>
          <li>Serving the poor and marginalized</li>
          <li>Building community among our faithful</li>
          <li>Nurturing vocations to the priesthood and religious life</li>
        </ul>

        <h2>Parish Activities</h2>
        <ul style={{marginLeft: '2rem'}}>
          <li><strong>Simbahan:</strong> [Day] - [Time]</li>
          <li><strong>Bible Study:</strong> [Day] - [Time]</li>
          <li><strong>Youth Ministry:</strong> [Day] - [Time]</li>
          <li><strong>Choir Practice:</strong> [Day] - [Time]</li>
        </ul>
      </div>
    </main>
  )
}