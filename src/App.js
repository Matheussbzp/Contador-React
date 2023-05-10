import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>Contador Simples React</h1>
      <h2>{value}</h2>
      <div className="button-container">
        <button className="btn" onClick={() => setValue(value + 1)}>
          Aumentar
        </button>
        <button className="btn" onClick={() => setValue(value - 1)}>
          Diminuir
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;