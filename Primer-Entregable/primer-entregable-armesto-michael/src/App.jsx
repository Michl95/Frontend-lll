import { Card } from './Card'
import './App.css'
import { Footer } from './Footer'
import { useState } from 'react'


export const App = () => {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleNombre = ({target}) => setNombre(target.value);
  const handleApellido = ({target}) => setApellido(target.value);
  
  const handleSubmit = (e) => {

    e.preventDefault();

    const cleanNombre = nombre.trim().toLowerCase();
    const cleanApellido = apellido.trim().toLowerCase();

    if(cleanNombre.length < 3 || cleanApellido.length < 6)  {
      setError(true);
      setSubmitted(true);
    } else {
      setError(false);
      setSubmitted(true);
    };
      
  }

  return (
    <>
      <h1>Carga de estudiantes</h1>
      <form className='form' onSubmit={handleSubmit}>

        <input type="text" className={`text-input ${error ? 'error' : ''}`} onChange = { handleNombre } placeholder='Ingresa tu nombre'/>
        <input type="text" className={`text-input ${error ? 'error' : ''}`} onChange = { handleApellido } placeholder='Ingresa tu Apellido'/>

        <button type='submit' className='btn-submit'>Enviar</button>

      </form>
      {submitted && (
        <Card
          nombre={nombre}
          apellido={apellido}
          mensaje={error ? 'Chequea los datos ingresados' : null}
        />
      )}
      <Footer />
    </>
  )
}


