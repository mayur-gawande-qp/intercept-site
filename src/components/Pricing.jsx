import { CheckIcon } from './Icons.jsx'
import './Pricing.css'

const PLANS = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Try Intercept on a single site with core micro-surveys.',
    features: ['1 website', '500 responses / mo', 'Basic targeting', 'Email support'],
    cta: 'Start for free',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$79',
    period: 'per month',
    description: 'For teams running intercepts across product and marketing.',
    features: [
      'Unlimited websites',
      '25,000 responses / mo',
      'Advanced targeting & segments',
      'Real-time dashboards',
      'Slack & Segment integrations',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'annual contract',
    description: 'Security, scale, and support for larger organizations.',
    features: ['Everything in Growth', 'Mobile SDK', 'SSO & audit logs', 'Dedicated CSM'],
    cta: 'Talk to sales',
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="section pricing">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Pricing</span>
          <h2>Simple plans that scale with you</h2>
          <p>Start free. Upgrade when your feedback program grows.</p>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <div className={`pricing-card${plan.highlighted ? ' is-highlighted' : ''}`} key={plan.name}>
              {plan.highlighted && <span className="pricing-badge">Most popular</span>}
              <h3>{plan.name}</h3>
              <p className="pricing-description">{plan.description}</p>
              <div className="pricing-price">
                <span className="pricing-amount">{plan.price}</span>
                <span className="pricing-period">{plan.period}</span>
              </div>
              <a
                href="#"
                className={plan.highlighted ? 'btn btn-primary' : 'btn btn-secondary'}
                style={{ width: '100%' }}
              >
                {plan.cta}
              </a>
              <ul className="pricing-features">
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <CheckIcon size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
