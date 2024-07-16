import { useRef } from 'react'
import Sidebar from './components/Sidebar'
import HelloWorld from './components/HelloWorld'
import ReactStickyToParent from '../lib/ReactStickyToParent'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // Define a ref for the parent element and pass it to the ReactStickyToParent component
  const container = useRef<HTMLElement>(null);

  return (
    <div className="page">
      <aside ref={container} className="container">
        <ReactStickyToParent parent={container}>
          <div className="sticky">
            <h1>Sticky to parent</h1>
            <p><strong>Scroll down to see how it works</strong></p>

            <hr/>
            <p><strong>Note:</strong> the <code>.container</code> should have full height of the column, component sticks to it and moves <i>"inside"</i> it</p>
            <hr/>

            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>

            <Sidebar/>
          </div>
        </ReactStickyToParent>
      </aside>

      <section className="section">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <HelloWorld msg="Build for React" />
      </section>
    </div>
  )
}

export default App
