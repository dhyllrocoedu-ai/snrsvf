export default function MassSchedule() {
  return (
    <main>
      <div className="page-header">
        <h1>Mass Schedule</h1>
      </div>
      <div className="container">
        <div className="mass-schedule">
          <h3>Daily Mass</h3>
          <ul>
            <li><strong>Monday - Friday:</strong> 6:30 AM, 8:00 AM</li>
            <li><strong>Saturday:</strong> 6:30 AM</li>
          </ul>
        </div>

        <div className="mass-schedule">
          <h3>Sunday Mass</h3>
          <ul>
            <li><strong>First Mass:</strong> 6:00 AM</li>
            <li><strong>Second Mass:</strong> 8:00 AM</li>
            <li><strong>Third Mass:</strong> 10:00 AM</li>
            <li><strong>Fourth Mass:</strong> 12:00 NN</li>
            <li><strong>Evening Mass:</strong> 5:00 PM</li>
          </ul>
        </div>

        <div className="mass-schedule">
          <h3>Confession</h3>
          <ul>
            <li><strong>Saturday:</strong> 4:00 PM - 5:30 PM</li>
            <li><strong>By appointment:</strong> Contact the parish office</li>
          </ul>
        </div>

        <div className="mass-schedule">
          <h3>Exposition & Benediction</h3>
          <ul>
            <li><strong>First Friday:</strong> After 8:00 AM Mass</li>
          </ul>
        </div>
      </div>
    </main>
  )
}