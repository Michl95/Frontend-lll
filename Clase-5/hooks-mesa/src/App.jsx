import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);
  const [valores, setValores] = useState([]);

  const handleValor = () => {

    setCount( count + 1 );
    setValores([...valores, `Valor-${ count + 1 }`]);
    
  }

  const handleResetValor = () => {

    setCount(0);
    setValores([]);
  }

  return (
    <>
      <div>
      </div>
      <h1>Lista de Valores</h1>
      <div className="card">
        <button onClick={  handleValor }>
          Agregar Valor
        </button>
        <button onClick = { handleResetValor } >Resetear</button>
        <ol>
          {valores.map(valor => {
            return <li key = { valor }>{valor}</li>
          })}
        </ol>
      </div>
    </>
  )
}

export default App
