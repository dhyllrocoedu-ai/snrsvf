export default function MassSchedule() {
  return (
    <main>
      <div className="page-header">
        <h1>Mass Schedule</h1>
      </div>
      <div className="container">
        <div className="mass-schedule">
          <h3>Sunday Mass</h3>
          <ul>
            <li><strong>First Mass:</strong> 10:00 AM - 11:00 AM</li>
            <li><strong>Second Mass:</strong> 4:00 PM - 5:00 PM</li>
          </ul>
        </div>

        <div className="mass-schedule">
          <h3>Weekdays</h3>
          <ul>
            <li>No scheduled Mass</li>
            <li>Chapel is open for personal prayers and visits</li>
            <li>Contact the supervising parish for scheduled Mass intentions</li>
          </ul>
        </div>

        <div className="mass-schedule">
          <h3>Confession</h3>
          <ul>
            <li>Available before Sunday Masses</li>
            <li>Contact the parish office for appointments</li>
          </ul>
        </div>

        <div className="mass-schedule">
          <h3>Novena to San Vicente Ferrer</h3>
          <ul>
            <li>Every Wednesday after the 4:00 PM Mass</li>
            <li>All are welcome to join</li>
          </ul>
        </div>

        <div className="mass-schedule">
          <h3>Candle Lighting (Dagkotanan)</h3>
          <ul>
            <li>Candle racks are located outside the chapel for safety</li>
            <li>Please follow safety guidelines when lighting candles</li>
          </ul>
        </div>

        <div style={{textAlign: 'center', marginTop: '2rem', color: '#666'}}>
          <p>
            <strong>Supervising Parish:</strong> San Isidro Labrador Parish, San Fernando<br />
            <strong>Contact:</strong> 2314678
          </p>
          <p style={{fontSize: '0.9rem', marginTop: '1rem'}}>
            Note: Schedule may change during feast days and special occasions.<br />
            Please confirm with the parish office for updates.
          </p>
        </div>
      </div>
    </main>
  )
}