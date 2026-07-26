"use client"

import { useState } from 'react'

interface TimelineEvent {
  year: string
  title: string
  content: string
}

interface Section {
  id: string
  title: string
  content: React.ReactNode
}

const historyEvents: TimelineEvent[] = [
  {
    year: 'Late 1800s',
    title: 'Origin of Devotion',
    content: 'Devotion to San Vicente Ferrer in Pitalo began during an epidemic. The village was saved through the intercession of the saint, giving rise to its reputation as miraculous.'
  },
  {
    year: '1925',
    title: 'Chapel Construction',
    content: 'Antonio Delgado, a devotee of San Vicente Ferrer, commissioned the construction of a cement chapel in Pitalo. His wife was a Pitalo native, and he previously traveled to Toledo City to honor the saint before deciding to build a local chapel to propagate the devotion.'
  },
  {
    year: '1925-1931',
    title: 'Architecture',
    content: 'Construction began in early 1920s (possibly 1922-1924). The baroque façade with thick columns adorned with carvings of leaves and flora was the first part completed. The bell tower was constructed in 1931, maintaining the same baroque design with an old bronze bell inside.'
  },
  {
    year: 'May 3, 2016',
    title: 'The Fire',
    content: 'A fire razed the chapel after a couple lit 4,900 candles (49 packs of 100 each, representing 49 kilos the man lost before being cured of cancer) as thanksgiving. The flames quickly went out of control, engulfing the wooden altar structure and spreading to 13 neighboring homes. Only the concrete walls and columns survived.'
  },
  {
    year: '2016-2018',
    title: 'Rebuilding',
    content: 'Donations poured in to restore the chapel. At least P5 million was spent for reconstruction. The new roof, ceiling, and altar were refurbished. To prevent another fire, candle racks (dagkotanan) were moved outside the chapel compound, and fire safety measures were installed.'
  },
  {
    year: 'April 10, 2018',
    title: 'Feast Day Resumption',
    content: 'Cebu Archbishop Jose Palma officiated the Mass as the chapel reopened for the feast of San Vicente Ferrer. The chapel rose from the ashes, restored to its original beauty.'
  }
]

export default function About() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})
  const [openTimeline, setOpenTimeline] = useState<string | null>(null)

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const toggleTimeline = (year: string) => {
    setOpenTimeline(prev => prev === year ? null : year)
  }

  const sections: Section[] = [
    {
      id: 'church',
      title: 'About the Church',
      content: (
        <div className="page-content">
          <p>
            <strong>St. Vincent Ferrer Church</strong> (also known as Pitalo Church) is located in Pitalo, San Fernando, Cebu — one of the largest barangays in the municipality with a population of approximately 7,962 people.
          </p>
          <p>
            <strong>Address:</strong> Natalio Bacalso Avenue, Pitalo, San Fernando 6018<br />
            <strong>Contact:</strong> 2314678<br />
            <strong>Facebook:</strong>{' '}
            <a href="https://www.facebook.com/Snr.SanVicenteFerrerPitalo/" target="_blank" rel="noopener noreferrer">
              fb.com/Snr.SanVicenteFerrerPitalo
            </a>
          </p>
          <p>
            The chapel features Spanish baroque-inspired architecture with a white facade, dark red trim, and gold embellishments depicting foliage, angels, flowers, and stars. Above the arched main entrance stands a statue of winged St. Vincent Ferrer with reliefs inscribed "Pitalo" and "1925."
          </p>
          <p>
            The chapel is under the supervision of <strong>San Isidro Labrador Parish Church</strong> in the Poblacion of San Fernando, Cebu. It is part of <strong>District III – Southeast Cebu</strong> within the <strong>Vicariate of St. Catherine of Alexandria</strong> under the <strong>Roman Catholic Archdiocese of Cebu</strong>.
          </p>
          <p>
            A notable feature is the relocation of candle racks (dagkotanan) outside the chapel for safety after the 2016 fire incident. The chapel continues to serve as a spiritual refuge for visitors seeking divine favors.
          </p>
        </div>
      )
    },
    {
      id: 'saint',
      title: 'About St. Vincent Ferrer',
      content: (
        <div className="page-content">
          <p>
            <strong>Vincent Ferrer (1350-1419)</strong> was a Valencian Dominican friar known as a preacher, missionary, logician, and one of the most influential religious figures of his time. He is often called <strong>"The Angel of the Apocalypse"</strong> because of his fiery preaching about the coming judgment.
          </p>

          <h3>Early Life</h3>
          <p>
            Born on January 23, 1350, in Valencia, Spain, Vincent was the fourth child of Guillem Ferrer and Constança Miquel. A legend tells that his father dreamed a Dominican friar foretold his son would be famous throughout the world. He entered the Dominican Order at age 18, where he read solely Sacred Scripture for three years and eventually memorized it.
          </p>

          <h3>Physical Description</h3>
          <p>
            He was of medium height with a lofty forehead, fair tonsured hair, very dark expressive eyes, and a pale complexion. His voice was described as "strong and powerful, at times gentle, resonant, and vibrant."
          </p>

          <h3>The Wandering Preacher</h3>
          <p>
            For <strong>21 years</strong>, Vincent traveled extensively across Western Europe — England, Scotland, Ireland, Aragon, Castile, France, Switzerland, and Italy. Though he could only speak Limousin (Valencian), he was believed to have been endowed with the <strong>gift of tongues</strong> to communicate with different nationalities.
          </p>
          <p>
            He was followed by an army of penitents numbering up to <strong>10,000</strong> at times. He preached for hours, sometimes three hours at a stretch. He maintained an austere lifestyle: sleeping on the floor, perpetual fasting, and arising at 2 AM for prayer.
          </p>

          <h3>Miracles & Wonders</h3>
          <p>
            <strong>More than 800 miracles</strong> were attributed to him. During his lifetime, he was credited with raising <strong>28 people from the dead</strong>. He converted an estimated 25,000 Jews to Catholicism, including Paul of Burgos (Solomon ha-Levi), a rabbi who later became Bishop of Cartagena and Archbishop of Burgos.
          </p>
          <p>
            Though he only spoke Valencian, he was understood by all due to his miraculous gift of tongues.
          </p>

          <h3>Why St. Vincent Ferrer is Shown with Wings</h3>
          <p>
            The wings are among St. Vincent Ferrer's traditional attributes. They symbolize:
          </p>
          <ul style={{marginLeft: '2rem'}}>
            <li><strong>Divine Messenger</strong> — He saw himself as God's messenger sent to prepare men for judgment</li>
            <li><strong>Rapid Missionary Travel</strong> — Symbolizes his extensive travels across Europe as Christ's messenger</li>
            <li><strong>Angel of the Apocalypse</strong> — Called this because of his preaching about the end times</li>
          </ul>

          <h3>Role in History</h3>
          <p>
            Vincent Ferrer was chosen as one of nine compromisaries (judges) in the <strong>Compromise of Caspe (1412)</strong>, which selected Ferdinand of Castile as King of Aragon. This helped shape Spanish history and led to the dynastic union of Aragon and Castile.
          </p>

          <h3>Patronage</h3>
          <p>
            St. Vincent Ferrer is patron of:
          </p>
          <ul style={{marginLeft: '2rem'}}>
            <li>Valencia, Spain; France; builders; construction workers; fishermen; prisoners</li>
            <li>In the Philippines: Bayambang (Pangasinan), Cabuyao (Laguna), Leganes (Iloilo), Batad (Iloilo), San Dionisio (Iloilo), San Vicente (Ilocos Sur), and <strong>Pitalo, San Fernando, Cebu</strong></li>
          </ul>

          <h3>Legacy</h3>
          <p>
            He refused ecclesiastical honors, including being offered the cardinalate, preferring to remain an apostle missionary. He died on April 5, 1419, in Vannes, Brittany, France. He was canonized on <strong>June 3, 1455</strong> by Pope Callixtus III. His feast day is celebrated on <strong>April 5</strong>.
          </p>
        </div>
      )
    },
    {
      id: 'youth',
      title: 'Church Youth Community',
      content: (
        <div className="page-content">
          <p>
            The <strong>Church Youth Ministry</strong> at St. Vincent Ferrer Church Pitalo is a vibrant community of young people dedicated to serving God and the church.
          </p>
          <p>
            Our youth participate in various activities including:
          </p>
          <ul style={{marginLeft: '2rem', marginBottom: '1rem'}}>
            <li>Sunday Youth Mass</li>
            <li>Bible Study Sessions</li>
            <li>Community Outreach Programs</li>
            <li>Candle Ministry</li>
            <li>Music and Liturgy Ministry</li>
            <li>Retreats and Camps</li>
          </ul>
          <p>
            <em>[Your youth ministry details and schedules here]</em>
          </p>
        </div>
      )
    }
  ]

  return (
    <main>
      <div className="page-header">
        <h1>About Us</h1>
      </div>

      <div className="container">
        {sections.map((section) => (
          <div key={section.id} className="accordion-item" style={{marginBottom: '1rem'}}>
            <button
              onClick={() => toggleSection(section.id)}
              style={{
                width: '100%',
                padding: '1rem',
                background: openSections[section.id] ? '#8B0000' : '#f5f5f5',
                color: openSections[section.id] ? 'white' : '#333',
                border: 'none',
                borderRadius: '8px',
                textAlign: 'left',
                cursor: 'pointer',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              {section.title}
              <span>{openSections[section.id] ? '−' : '+'}</span>
            </button>
            {openSections[section.id] && (
              <div style={{background: '#fff', padding: '1rem', borderRadius: '0 0 8px 8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                {section.content}
              </div>
            )}
          </div>
        ))}

        <div className="accordion-item" style={{marginBottom: '1rem'}}>
          <button
            onClick={() => toggleSection('history')}
            style={{
              width: '100%',
              padding: '1rem',
              background: openSections['history'] ? '#8B0000' : '#f5f5f5',
              color: openSections['history'] ? 'white' : '#333',
              border: 'none',
              borderRadius: '8px',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            History
            <span>{openSections['history'] ? '−' : '+'}</span>
          </button>
          {openSections['history'] && (
            <div style={{background: '#fff', padding: '1rem', borderRadius: '0 0 8px 8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
              <div className="timeline">
                {historyEvents.map((event) => (
                  <div key={event.year} className="timeline-item" style={{marginBottom: '1rem', borderLeft: '3px solid #8B0000', paddingLeft: '1rem'}}>
                    <button
                      onClick={() => toggleTimeline(event.year)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: '#8B0000',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      <span style={{
                        display: 'inline-block',
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        background: openTimeline === event.year ? '#8B0000' : '#ccc',
                        border: '2px solid #8B0000'
                      }}></span>
                      {event.year} — {event.title}
                      <span style={{marginLeft: 'auto'}}>{openTimeline === event.year ? '−' : '+'}</span>
                    </button>
                    {openTimeline === event.year && (
                      <p style={{marginTop: '0.5rem', paddingLeft: '1.5rem', lineHeight: '1.6', color: '#666'}}>
                        {event.content}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="sources" style={{marginTop: '2rem', padding: '1rem', background: '#f9f9f9', borderRadius: '8px'}}>
          <h4 style={{marginBottom: '0.5rem', color: '#8B0000'}}>Sources</h4>
          <ul style={{fontSize: '0.9rem', color: '#666', listStyle: 'none', padding: 0}}>
            <li>
              <a href="https://www.mass-schedules.com/catholic-church/1662/san-vicente-ferrer-pitalo-church.html" target="_blank" rel="noopener noreferrer">
                mass-schedules.com
              </a>
            </li>
            <li>
              <a href="https://www.theoldchurches.com/philippines/cebu/san-fernando/san-vicente-ferrer-chapel-in-san-fernando-cebu/" target="_blank" rel="noopener noreferrer">
                theoldchurches.com
              </a>
            </li>
            <li>
              <a href="https://unknowncebu.com/2021/05/24/pitalo-a-humble-place/" target="_blank" rel="noopener noreferrer">
                unknowncebu.com
              </a>
            </li>
            <li>
              <a href="https://cebudailynews.inquirer.net/169963/san-vicente-ferrer-chapel-pitalo-rises-ashes" target="_blank" rel="noopener noreferrer">
                cebudailynews.inquirer.net
              </a>
            </li>
            <li>
              <a href="https://en.wikipedia.org/wiki/Vincent_Ferrer" target="_blank" rel="noopener noreferrer">
                Wikipedia - Vincent Ferrer
              </a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}