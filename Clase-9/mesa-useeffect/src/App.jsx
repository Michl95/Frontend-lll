
import { useState, useEffect } from "react";
import { Pedido } from "./Pedido";

export const App = () => {

    const [pedidoDetails, setPedidoDetails] = useState('Pizza cuatro quesos');
    const [mostrarComponente, setMostrarComponente] = useState(true);

    /*useEffect(() => {
        setOrderDetails(prompt('Que gustaria llevar?'));
    }, [])*/

  const handleCancelOrder = () => {
    setPedidoDetails('');
    setMostrarComponente(false);
    console.log('Pedido cancelado');
  };

  const handlePedir = () => {
    setPedidoDetails('Pizza comun');
    setMostrarComponente(true);
    console.log('volviste a pedir!')
  }



  return (
    <div className="App">
      <h1>¡Pizzería Effect!</h1>
      {mostrarComponente && (
        <Pedido pedidoDetails={pedidoDetails} />
      )}
      <button onClick={handleCancelOrder}>Cancelar Pedido</button>
      <button onClick={handlePedir}>Hacer pedido</button>
    </div>
  )
}

