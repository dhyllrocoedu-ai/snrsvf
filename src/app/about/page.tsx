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
            <strong>San Vicente Ferrer Chapel</strong> (also known as Pitalo Church) is located in Pitalo, San Fernando, Cebu.
            Established in 1925 through the devotion of Antonio Delgado, the chapel has been a pilgrimage site for devotees seeking the intercession of San Vicente Ferrer.
          </p>
          <p>
            <strong>Address:</strong> Natalio Bacalso Avenue, Pitalo, San Fernando 6018<br />
            <strong>Contact:</strong> 2314678<br />
            <strong>Status:</strong> Chapel under San Isidro Labrador Parish
          </p>
          <p>
            The chapel features Spanish baroque-inspired architecture with a white facade, dark red trim, and gold embellishments. Above the arched main entrance stands a statue of winged St. Vincent Ferrer with reliefs inscribed "Pitalo" and "1925."
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
            <strong>Vincent Ferrer (1350-1419)</strong> was a Valencian Dominican friar known as a preacher, missionary, and logician. Born on January 23, 1350, in Valencia, Spain, he became one of the most influential religious figures of his time.
          </p>
          <p>
            <strong>Life & Ministry:</strong><br />
            - Entered the Dominican Order at age 18<br />
            - Traveled extensively across Western Europe and the British Isles<br />
            - Preached for 21 years, credited with converting many to Christianity<br />
            - Involved in the Western Schism (1378-1417), supporting Antipope Benedict XIII<br />
            - Participated in the Compromise of Caspe
          </p>
          <p>
            <strong>Miracles & Devotion:</strong><br />
            Known as "The Nameless Saint," he is portrayed with wings, symbolizing his believed power to be in several places at once. Devotees swear to answered petitions after praying to him, lighting candles, and attending Mass.
          </p>
          <p>
            <strong>Canonization:</strong> June 3, 1455, by Pope Callixtus III<br />
            <strong>Feast Day:</strong> April 5<br />
            <strong>Patron of:</strong> Valencia, Spain, France, construction workers, fishermen, prisoners
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
            The <strong>Church Youth Ministry</strong> at San Vicente Ferrer Chapel Pitalo is a vibrant community of young people dedicated to serving God and the church.
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
          </ul>
        </div>
      </div>
    </main>
  )
}