import { useState } from "react";

const ItemCount = ({ stock, inicial, onAdd }) => {

  const [cantidad, setCantidad] = useState(inicial);

  const aumentar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const disminuir = () => {
    if (cantidad > inicial) {
      setCantidad(cantidad - 1);
    }
  };
	
  return (
    <div>
      <button onClick={disminuir}>-</button>
      <strong>{cantidad}</strong>
      <button onClick={aumentar}>+</button>
      <button onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemCount;