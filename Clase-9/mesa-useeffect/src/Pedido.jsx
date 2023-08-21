import { useState, useEffect } from "react"


export const Pedido = ({pedidoDetails}) => {

    const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    console.log('Espera dos segundos...');
    const timer = setTimeout(() => {
      setLoaded(true);
      console.log('Pasaron dos segundos...');
      console.log('Pedido cargado: ' + pedidoDetails);
    }, 2000);

    //limpiamos temporizador
    return () => clearTimeout(timer); 
  }, []);


  return (
    <div>
        <h1>Pedido de Pizza</h1>
      {loaded ? 
      (<div><p>Detalles del pedido: {pedidoDetails}</p></div>) 
      : 
      (<p>Cargando pedido...</p>)}
    </div>
  )
}

