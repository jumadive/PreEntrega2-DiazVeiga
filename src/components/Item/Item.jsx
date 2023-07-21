import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="cardProd">
      <img className="imgProd" src={img} alt={nombre} />
      <div className="infoProd">
        <h3>{nombre}</h3>
        <p>$ {precio}</p>
        <Link to={`/item/${id}`}>Ver Detalles</Link>
      </div>
    </div>
  );
};

export default Item;