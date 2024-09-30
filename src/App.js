import { useRef } from 'react';
import './App.css';

function App() {
  const valorInput = useRef();  
  const resultado = useRef();
  const imprimirTexto = () => {
    resultado.current.innerHTML = valorInput.current.value;
  }
  return (

    <div className="App">
      <input ref={valorInput}/>
      <br></br>
      <button onClick={imprimirTexto}>Imprimir texto</button>
      <div ref={resultado}></div>
    </div>
  );
}

export default App;
