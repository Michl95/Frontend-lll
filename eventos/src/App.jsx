import { Form } from "./Form"
import { Evento } from "./evento"


export const App = () => {
  return (
    <div className="app">
      <h2>Practicando Eventos y Formularios</h2>
      <Evento />
      <Evento numero='1'/>
      <Evento numero='2'/>
      <Form />
    </div>
  )
}


