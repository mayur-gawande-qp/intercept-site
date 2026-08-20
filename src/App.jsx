import { Navbar } from './components/Navbar.jsx'
import { Hero } from './components/Hero.jsx'
import { LogoCloud } from './components/LogoCloud.jsx'
import { Features } from './components/Features.jsx'
import { HowItWorks } from './components/HowItWorks.jsx'
import { Testimonial } from './components/Testimonial.jsx'
import { Pricing } from './components/Pricing.jsx'
import { CTA } from './components/CTA.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <HowItWorks />
        <Testimonial />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
