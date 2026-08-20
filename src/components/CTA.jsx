import { ArrowRightIcon } from './Icons.jsx'
import './CTA.css'

export function CTA() {
  return (
    <section className="cta">
      <div className="container cta-inner">
        <h2>Start hearing from your users today</h2>
        <p>Free forever on one site. No credit card required.</p>
        <a href="#pricing" className="btn btn-lg cta-btn">
          Get started for free
          <ArrowRightIcon />
        </a>
      </div>
    </section>
  )
}
