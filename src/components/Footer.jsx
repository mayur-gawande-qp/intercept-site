import { BoltIcon } from './Icons.jsx'
import './Footer.css'

const COLUMNS = [
  {
    heading: 'Product',
    links: ['Website Intercepts', 'Exit Intent', 'Mobile SDK', 'Smart Targeting'],
  },
  {
    heading: 'Solutions',
    links: ['SaaS & B2B', 'E-commerce', 'Product Teams'],
  },
  {
    heading: 'Resources',
    links: ['Documentation', 'Case Studies', 'Help Center'],
  },
  {
    heading: 'Company',
    links: ['About', 'Careers', 'Contact'],
  },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <a href="#top" className="navbar-brand">
            <span className="navbar-mark" aria-hidden="true">
              <BoltIcon size={18} />
            </span>
            Intercept
          </a>
          <p>Feedback that finds the moment.</p>
        </div>

        {COLUMNS.map((column) => (
          <div className="footer-column" key={column.heading}>
            <h4>{column.heading}</h4>
            <ul>
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Intercept, Inc. All rights reserved.</p>
        <p>Built with React &amp; Vite, hosted on GitHub Pages.</p>
      </div>
    </footer>
  )
}
