import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        <img
          src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=740&t=st=1685841527~exp=1685842127~hmac=3b325579db59cb320f10ce39cfa5b0bb7a3e32c4b6a224f4017bb42f98d38a9a"
          alt="Carrito"
        />
        {cantidadTotal > 0 && <strong>{cantidadTotal}</strong>}
      </Link>
    </div>
  );
};

export default CartWidget;