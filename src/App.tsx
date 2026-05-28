import { useState } from 'react'
import './App.css'
import Profile from './Profile'
import ProductList from './ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>React Memo and useCallback Exercise</h1>
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <Profile firstname="John" lastname="Doe" />
        <ProductList />
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
