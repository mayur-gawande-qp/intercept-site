import { useState } from 'react'
import { Dropdown } from './Dropdown.jsx'
import {
  BoltIcon,
  ChevronDownIcon,
  CloseIcon,
  DoorExitIcon,
  MenuIcon,
  MobileIcon,
  PuzzleIcon,
  TargetIcon,
} from './Icons.jsx'
import './Navbar.css'

const PRODUCT_ITEMS = [
  { title: 'Website Intercepts', description: 'Micro-surveys triggered by behavior', href: '#features', icon: BoltIcon },
  { title: 'Exit Intent', description: 'Catch feedback before visitors leave', href: '#features', icon: DoorExitIcon },
  { title: 'Mobile SDK', description: 'Native intercepts for iOS & Android', href: '#features', icon: MobileIcon },
  { title: 'Smart Targeting', description: 'Show the right prompt to the right segment', href: '#features', icon: TargetIcon },
]

const SOLUTIONS_ITEMS = [
  { title: 'SaaS & B2B', description: 'Reduce churn with in-product signals', href: '#', icon: PuzzleIcon },
  { title: 'E-commerce', description: 'Find friction before checkout drop-off', href: '#', icon: TargetIcon },
  { title: 'Product Teams', description: 'Prioritize the roadmap with real usage', href: '#', icon: BoltIcon },
]

const RESOURCES_ITEMS = [
  { title: 'Documentation', description: 'Guides for install and configuration', href: '#', icon: PuzzleIcon },
  { title: 'Case Studies', description: 'How teams use Intercept day to day', href: '#', icon: TargetIcon },
  { title: 'Help Center', description: 'Answers from our support team', href: '#', icon: BoltIcon },
]

const MOBILE_GROUPS = [
  { label: 'Product', items: PRODUCT_ITEMS },
  { label: 'Solutions', items: SOLUTIONS_ITEMS },
  { label: 'Resources', items: RESOURCES_ITEMS },
]

function MobileAccordion({ label, items }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="mobile-accordion">
      <button
        type="button"
        className="mobile-accordion-trigger"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <ChevronDownIcon className={open ? 'is-open' : ''} />
      </button>
      {open && (
        <div className="mobile-accordion-panel">
          {items.map((item) => (
            <a key={item.title} href={item.href} className="mobile-accordion-item">
              {item.title}
            </a>
          ))}
        </div>
      )}
    </div>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-brand">
          <span className="navbar-mark" aria-hidden="true">
            <BoltIcon size={18} />
          </span>
          Intercept
        </a>

        <nav className="navbar-links" aria-label="Primary">
          <Dropdown label="Product" items={PRODUCT_ITEMS} />
          <Dropdown label="Solutions" items={SOLUTIONS_ITEMS} />
          <a href="#pricing" className="navbar-link">
            Pricing
          </a>
          <Dropdown label="Resources" items={RESOURCES_ITEMS} />
        </nav>

        <div className="navbar-actions">
          <a href="#" className="btn btn-ghost">
            Log in
          </a>
          <a href="#pricing" className="btn btn-primary">
            Get started
          </a>
        </div>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar-mobile">
          <div className="container navbar-mobile-inner">
            {MOBILE_GROUPS.map((group) => (
              <MobileAccordion key={group.label} label={group.label} items={group.items} />
            ))}
            <a href="#pricing" className="mobile-plain-link" onClick={() => setMobileOpen(false)}>
              Pricing
            </a>
            <div className="navbar-mobile-actions">
              <a href="#" className="btn btn-secondary">
                Log in
              </a>
              <a href="#pricing" className="btn btn-primary" onClick={() => setMobileOpen(false)}>
                Get started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
