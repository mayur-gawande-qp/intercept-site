import { StarIcon } from './Icons.jsx'
import './Testimonial.css'

export function Testimonial() {
  return (
    <section className="section testimonial">
      <div className="container">
        <div className="testimonial-card">
          <div className="testimonial-stars" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((n) => (
              <StarIcon key={n} size={18} />
            ))}
          </div>
          <blockquote>
            "We replaced a quarterly NPS email with a one-question intercept at the moment of value.
            Response rate went from 4% to 38%, and we finally know why people churn."
          </blockquote>
          <div className="testimonial-person">
            <span className="testimonial-avatar" aria-hidden="true">
              PS
            </span>
            <div>
              <p className="testimonial-name">Priya Sharma</p>
              <p className="testimonial-role">Head of Product, Northwind</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
