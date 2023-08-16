import { useState } from "react";
import { DatosUsuario } from "./DatosUsuario";
import './index.css';

export const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState(0);
    const [pokemon, setPokemon] = useState('');
    const [datosEnviados, setDatosEnviados] = useState(false)

    const handleNombre = ({target}) => setNombre(target.value);

    const handleEdad = ({target}) => setEdad(target.value);

    const handlePokemon = ({target}) => setPokemon(target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        const cleanNombre = nombre.trim().toLowerCase();
        const cleanPokemon = pokemon.trim().toLowerCase();

        if (cleanNombre.length <= 1 || cleanPokemon.length <= 1) {
            console.log(cleanNombre.lenght, cleanPokemon.length);
            alert('Falta completar algun dato');
            return;
        };
        
        alert(`Nombre: ${nombre}\n Edad: ${edad}\n Pokemon: ${pokemon}`);

        setDatosEnviados(true);

    }

  return (
    <div className="container">
        <h2>Formulario de Registro de usuario</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" onChange={handleNombre} placeholder="Nombre..."/>
            </div>
            <div>
                <input type="number" onChange={handleEdad} placeholder="Edad..."/>
            </div>
            <div>
                <input type="text"  onChange={handlePokemon} placeholder="Elije tu pokemon..."/>
            </div>
            <div>
                <button type="submit">Mostrar Datos</button>
            </div>
        </form>
        {/* Esta condición evalúa si lo que está antes del && es true. En caso de ser asá lo que está despuás del && será renderizado */}
        {datosEnviados && (
        <DatosUsuario
            nombre = {nombre}
            edad = {edad}
            pokemon = {pokemon}
        />
      )}
    </div>
  )
}

