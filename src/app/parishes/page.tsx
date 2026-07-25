export default function Parishes() {
  return (
    <main>
      <div className="page-header">
        <h1>Parishes & Mass Times</h1>
      </div>
      <div className="container">
        <div className="mass-schedule">
          <h3> Metropolitan Cathedral Basilica del Santo Niño</h3>
          <ul>
            <li><strong>Monday - Friday:</strong> 6:00 AM, 12:00 NN</li>
            <li><strong>Saturday:</strong> 6:00 AM, 6:00 PM (Anticipated)</li>
            <li><strong>Sunday:</strong> 6:00 AM, 8:00 AM, 10:00 AM, 12:00 NN, 5:00 PM</li>
          </ul>
        </div>

        <div className="mass-schedule">
          <h3>Basilica del Santo Niño</h3>
          <ul>
            <li><strong>Monday - Saturday:</strong> 6:00 AM, 7:00 AM</li>
            <li><strong>Sunday:</strong> 6:00 AM, 7:30 AM, 9:00 AM, 10:30 AM, 12:00 NN, 5:00 PM</li>
          </ul>
        </div>

        <div className="mass-schedule">
          <h3>St. Francis of Assisi Parish</h3>
          <ul>
            <li><strong>Monday - Friday:</strong> 6:30 AM, 8:00 AM</li>
            <li><strong>Saturday:</strong> 6:30 AM</li>
            <li><strong>Sunday:</strong> 7:00 AM, 9:00 AM, 11:00 AM</li>
          </ul>
        </div>

        <p style={{textAlign: 'center', marginTop: '2rem', color: '#666'}}>
          For other parishes, please contact the Archdiocese office.
        </p>
      </div>
    </main>
  )
}