

export const ButtonChild = ({ childCount, setChildCount }) => {
  return (
    <div>
        <h2>El contador es: { childCount }</h2>
        <button onClick={ () => setChildCount(( count ) => count + 1 )}>Suma Otro</button>
        <button onClick={ () => setChildCount(0) } >Reset</button>
    </div>
  )
}

