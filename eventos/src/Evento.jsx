

export const Evento = (numero) => {
 
    const miEvento = () => console.log('Activado #'+numero);

  return (
    <div>
        <p>Click para lanzar un evento</p>
        <button onClick={ miEvento }>Activar</button>
    </div>
  )
}

