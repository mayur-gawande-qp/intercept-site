import './HowItWorks.css'

const STEPS = [
  {
    number: '01',
    title: 'Install one snippet',
    description: 'Drop a single script tag into your site or add the SDK to your app. Takes under five minutes.',
  },
  {
    number: '02',
    title: 'Design your intercept',
    description: 'Pick a trigger — page, event, or exit-intent — and build the question with the visual editor.',
  },
  {
    number: '03',
    title: 'Act on the insight',
    description: 'Responses land in your dashboard in real time, tagged by theme and sentiment, ready to route.',
  },
]

export function HowItWorks() {
  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">How it works</span>
          <h2>From install to insight in one afternoon</h2>
          <p>No engineering sprint required. Most teams launch their first intercept the same day.</p>
        </div>

        <div className="steps">
          {STEPS.map((step) => (
            <div className="step" key={step.number}>
              <span className="step-number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
