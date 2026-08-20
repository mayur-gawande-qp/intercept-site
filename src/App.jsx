import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="page">
      <h1>Intercept Site</h1>
      <p className="subtitle">A simple React single-page app, hosted on GitHub Pages.</p>

      <button type="button" className="counter" onClick={() => setCount((c) => c + 1)}>
        Count is {count}
      </button>

      <p className="hint">
        Edit <code>src/App.jsx</code> and push to update this page.
      </p>
    </main>
  )
}

export default App
