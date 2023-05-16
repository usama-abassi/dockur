import "./App.css";
import Header from "./header";
import start from "./start.png";
import stop from "./stop.png";
import restart from "./restart.png";
import deleted from "./delete.png";

function App() {
  return (
    <div className="App">
      <style>{"body { background-color: #475e6e; }"}</style>
      <div className="header">
        <Header />
        <div className="data">
          <div className="data-div">
            <p>Data</p>
            <button className="button"><img src={start} className="img" alt="start" /></button>
            <button className="button"><img src={stop} className="img" alt="stop" /></button>
            <button className="button"><img src={restart} className="img" alt="restart" /></button>
            <button className="button"><img src={deleted} className="img" alt="deleted" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
