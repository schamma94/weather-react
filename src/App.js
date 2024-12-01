import "./App.css";
import "./Weather.css";
import "./Search.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container border border-4 shadow">
        <Weather defaultCity="Melbourne" />
      </div>
      <div className="open-source">
        <a
          className="source-link"
          href="https://github.com/schamma94/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open Source Code
        </a>{" "}
        by Sarah Chamma
      </div>
    </div>
  );
}

export default App;
