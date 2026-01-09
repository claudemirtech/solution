import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

export const App = () => {
  const [service, setService] = useState('');
  const [history, setHistory] = useState([]);
  const redirectUrl = `https://gitlab.com/softplan/justica/internacional/devops/solutions/unj-solution-caba/-/pipelines/new?ref=main&var%5BCUSTOMER%5D=softplan&var%5BENVIRONMENT%5D=poc-esaj-caba-argentina&var%5BPRODUCT_VERSION%5D=develop&var%5BSERVICE%5D=${service}&var%5BWORKFLOW%5D=deploy-service`;

  const handleOpen = () => {
    if (service.trim()) {
      const newHistory = [service, ...history.filter(h => h !== service)].slice(0, 10);
      setHistory(newHistory);
    }
    window.open(redirectUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
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
          <button className="deployButton" onClick={handleOpen}>Open</button>
        </div>
        <div className="history">
          <ul>
            {history.map((item, index) => (
              <li key={index} onClick={() => setService(item)} style={{ cursor: 'pointer' }}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}