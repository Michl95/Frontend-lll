import styles from './productos.module.css';

const productos = [
  {
    nombre: "Macbook Air 13",
    imagen: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    precio: "R$ 7999.00",
  },
  {
    nombre: "Echo Dot",
    imagen: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    precio: "R$ 379.00",
  },
  {
    nombre: "Camara Ip 360°",
    imagen: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    precio: "R$ 199.00",
  },
  {
    nombre: "Cerradura digital",
    imagen: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    precio: "R$ 1599.00",
  },
];

function App() {
  return (
    <div className={styles.producto_container}>
      <h1 className={styles.titulo}>Productos</h1>
      <ul className={styles.lista_container}>
        {/* <li>
          <h2>{produtos[0].nome}</h2>
          <img src={produtos[0].image} />
          <h3>{produtos[0].preco}</h3>
        </li>

        <li>
          <h2>{produtos[1].nome}</h2>
          <img src={produtos[1].image} />
          <h3>{produtos[1].preco}</h3>
        </li>

        <li>
          <h2>{produtos[2].nome}</h2>
          <img src={produtos[2].image} />
          <h3>{produtos[2].preco}</h3>
        </li> */}
        {productos.map((producto, index) => (
          <li className={styles.producto} key={index}>
            <h2>{index + ' - ' + producto.nombre}</h2>
            <img className={styles.imagen} src={producto.imagen} alt={producto.nombre} />
            <h3>{producto.precio}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
