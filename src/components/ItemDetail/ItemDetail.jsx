import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemDetail = ({ nombre, precio, img, stock, descripcion, id }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CartContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };

  return (
    <div className="contenedorItem">
      <h3>Nombre: {nombre} </h3>
      <h3>Precio: ${precio} </h3>
      <p>{descripcion}</p>
      <img src={img} alt={nombre} />
      {agregarCantidad > 0 ? (
        <Link to="/cart">Terminar Compra</Link>
      ) : (
        <ItemCount inicial={1} stock={stock} onAdd={manejadorCantidad} />
      )}
    </div>
  );
};

export default ItemDetail;