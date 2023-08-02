

export const Card = ({nombre, precio}) => {
  return (
    <div className="cardContainer">
        <h3>{nombre}</h3>
        <p>{precio}</p>
    </div>
  )
}


