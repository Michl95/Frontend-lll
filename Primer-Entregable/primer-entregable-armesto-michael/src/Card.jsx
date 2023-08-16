import './card.css'

export const Card = ({ nombre, apellido, mensaje}) => {
  return (
    <div className="card">
      
      {mensaje && (
        <>
          <h4>Datos NO recibidos</h4>
          <p>{mensaje}</p>
        </>)}
      {!mensaje && (
        <>
          <h4>Datos recibidos</h4>
          <p><strong>Nombre:</strong> {nombre}</p>
          <p><strong>Apellido:</strong> {apellido}</p>
          <p>Gracias por registrarte!</p>
        </>
      )}
    </div>
  )
}
