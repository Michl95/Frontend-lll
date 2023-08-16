import './datosUsuario.css';

export const DatosUsuario = ({nombre, edad, pokemon}) => {
  return (
    <div className="datosUsuario_container">
      <h2>Datos Enviados</h2>
      <p>Nombre: {nombre}</p>
      <p>Edad: {edad}</p>
      <p>Pokemon favorito: {pokemon}</p>
    </div>
  )
}

