import { Card } from './Card'
import './App.css'
import { Footer } from './Footer'


export const App = () => {
  return (
    <>
      <h1>Carga de estudiantes</h1>
      <form className='form'>

        <input type="text" className='text-input' placeholder='Ingresa tu nombre'/>
        <input type="text" className='text-input' placeholder='Ingresa tu Apellido'/>

        <button className='btn-submit'>Enviar</button>

      </form>
      <Card />
      <Footer />
    </>
  )
}


