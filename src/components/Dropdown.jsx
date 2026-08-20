import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from './Icons.jsx'
import './Dropdown.css'

export function Dropdown({ label, items }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  useEffect(() => {
    if (!open) return undefined

    function handlePointerDown(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    function handleKeyDown(event) {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  return (
    <div className="dropdown" ref={rootRef}>
      <button
        type="button"
        className={`dropdown-trigger${open ? ' is-open' : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {label}
        <ChevronDownIcon className="dropdown-chevron" size={15} />
      </button>

      {open && (
        <div className="dropdown-panel" role="menu">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="dropdown-item"
              role="menuitem"
              onClick={() => setOpen(false)}
            >
              <span className="dropdown-item-icon" aria-hidden="true">
                <item.icon size={18} />
              </span>
              <span>
                <span className="dropdown-item-title">{item.title}</span>
                <span className="dropdown-item-desc">{item.description}</span>
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
