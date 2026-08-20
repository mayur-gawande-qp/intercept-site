import { ArrowRightIcon, PlayIcon, StarIcon } from './Icons.jsx'
import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">
            <StarIcon size={14} />
            New: AI-summarized themes
          </span>
          <h1>Know what your users think, the moment they think it.</h1>
          <p className="hero-subtitle">
            Intercept drops a single line of code into your product and asks the right question,
            to the right visitor, at exactly the right moment — no 20-field form required.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-primary btn-lg">
              Start free trial
              <ArrowRightIcon />
            </a>
            <button type="button" className="btn btn-secondary btn-lg">
              <PlayIcon />
              Watch demo
            </button>
          </div>
          <div className="hero-meta">
            <div className="hero-avatars" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <p>Trusted by 2,400+ product teams to run over 40M intercepts a month</p>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="mock-browser">
            <div className="mock-browser-bar">
              <span className="mock-dot" />
              <span className="mock-dot" />
              <span className="mock-dot" />
              <div className="mock-url">app.yourproduct.com</div>
            </div>
            <div className="mock-browser-body">
              <div className="mock-line mock-line-lg" />
              <div className="mock-line mock-line-md" />
              <div className="mock-cards">
                <div className="mock-card" />
                <div className="mock-card" />
                <div className="mock-card" />
              </div>

              <div className="mock-intercept">
                <div className="mock-intercept-header">
                  <span>Quick question</span>
                  <span className="mock-intercept-close">&times;</span>
                </div>
                <p className="mock-intercept-question">How easy was it to complete that task?</p>
                <div className="mock-intercept-scale">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span key={n} className={n === 4 ? 'is-selected' : ''}>
                      {n}
                    </span>
                  ))}
                </div>
                <div className="mock-intercept-labels">
                  <span>Very hard</span>
                  <span>Very easy</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-glow" />
        </div>
      </div>
    </section>
  )
}
