export default function About() {
  return (
    <main>
      <div className="page-header">
        <h1>About the Archdiocese</h1>
      </div>
      <div className="page-content">
        <h2>Our History</h2>
        <p>
          The Archdiocese of Cebu is one of the oldest dioceses in Asia, established in 1594.
          Cebu is considered the cradle of Christianity in the Philippines, where the faith
          was first planted by Spanish missionaries led by Fr. Diego deLanda and later by
          the famous Legazpi Expedition.
        </p>

        <h2>Our Archbishop</h2>
        <p>
          His Grace, the Archbishop of Cebu, leads the archdiocese with a vision of
          renewal and evangelization. The archbishop is assisted by auxiliary bishops
          and the clergy in serving the spiritual needs of the faithful.
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
          <li>Fostering vocations to the priesthood and religious life</li>
        </ul>

        <h2>Quick Facts</h2>
        <ul style={{marginLeft: '2rem'}}>
          <li><strong>Established:</strong> 1594</li>
          <li><strong>Archbishop:</strong> [Name]</li>
          <li><strong>Territory:</strong> Cebu Province</li>
          <li><strong>Parishes:</strong> [Number]</li>
          <li><strong>Population:</strong> [Number] million Catholics</li>
        </ul>
      </div>
    </main>
  )
}