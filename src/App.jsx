import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const App = () => {
  const [count, setCount] = useState(0);
  const [service, setService] = useState('');
  const redirectUrl = `https://gitlab.com/softplan/justica/internacional/devops/solutions/unj-solution-caba/-/pipelines/new?ref=main&var%5BCUSTOMER%5D=softplan&var%5BENVIRONMENT%5D=poc-esaj-caba-argentina&var%5BPRODUCT_VERSION%5D=develop&var%5BSERVICE%5D=${service}&var%5BWORKFLOW%5D=deploy-service`;

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Deploy Service</h1>
      <div className="card">
        <p>
        Inform the service name and click on the button
        </p>
        <div className="deployForm">
          <label className="deployLabel" htmlFor="service">Service</label>
          <input
            id="service"
            className="deployInput"
            type="text"
            value={service}
            onChange={(e) => setService(e.target.value)}
            placeholder="ex: unj-api"
          />
          {/* window.location.href = redirectUrl */}
          <button className="deployButton" onClick={() => window.open(redirectUrl, "_blank", "noopener,noreferrer")}>Open</button>
        </div>
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}