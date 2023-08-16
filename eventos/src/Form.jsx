import { useState } from "react";

export const Form = () => {

    const [nombre, setnombre] = useState("");
    
    const handleNombre = (e) => {
        setnombre(e.target.value);
    };

    const registrar = (e) => {
        e.preventDefault();
        console.log('Usuario Registrado');
        console.log(nombre);
        setnombre('');
    }
  return (
    <div>
        <h2>Registro</h2>
        <form onSubmit={ registrar }>
            <div>
                <input type="text" placeholder="Ingrese el nombre" onChange={ handleNombre }/>
            </div>
            <div>
                <input type="submit" value='Registrarse'/>
            </div>
        </form>
    </div>
  )
}

