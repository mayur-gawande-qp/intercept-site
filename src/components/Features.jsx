import { BoltIcon, ChartIcon, DoorExitIcon, MobileIcon, PuzzleIcon, TargetIcon } from './Icons.jsx'
import './Features.css'

const FEATURES = [
  {
    icon: BoltIcon,
    title: 'Micro-surveys',
    description: 'Ask one sharp question at the perfect moment instead of a 20-field form nobody finishes.',
  },
  {
    icon: DoorExitIcon,
    title: 'Exit-intent capture',
    description: 'Detect when a visitor is about to leave and catch their reason before they go.',
  },
  {
    icon: ChartIcon,
    title: 'Real-time dashboards',
    description: 'Sentiment, themes, and trends update live as responses come in — no export required.',
  },
  {
    icon: TargetIcon,
    title: 'Smart targeting',
    description: 'Show intercepts to the right segment based on behavior, plan, or lifecycle stage.',
  },
  {
    icon: MobileIcon,
    title: 'Mobile SDK',
    description: 'Native intercepts inside iOS and Android apps, styled to match your product.',
  },
  {
    icon: PuzzleIcon,
    title: 'Integrations',
    description: 'Send responses to Slack, Salesforce, Segment, and 40+ other tools automatically.',
  },
]

export function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Platform</span>
          <h2>Everything you need to hear from users</h2>
          <p>One lightweight snippet. Every surface. Feedback that actually gets read.</p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature) => (
            <div className="feature-card" key={feature.title}>
              <div className="feature-icon">
                <feature.icon size={22} />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
