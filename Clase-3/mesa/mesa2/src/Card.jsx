

const Card = (props) => {
  return (
    <div>
        <h2>{props.nombre}</h2>
        <p>{props.precio}</p>
    </div>
  )
}

export default Card