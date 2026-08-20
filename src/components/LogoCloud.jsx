import './LogoCloud.css'

const LOGOS = ['Northwind', 'Globex', 'Initech', 'Umbrella', 'Hooli', 'Vandelay']

export function LogoCloud() {
  return (
    <section className="logo-cloud">
      <div className="container">
        <p className="logo-cloud-label">Trusted by product teams at</p>
        <div className="logo-cloud-row">
          {LOGOS.map((name) => (
            <span key={name} className="logo-cloud-item">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
