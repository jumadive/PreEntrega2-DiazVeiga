import "./Checkout.css";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {

  const { carrito, vaciarCarrito, cantidadTotal, total } = useContext(CartContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const manejadorFormulario = (e) => {
    e.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailConf) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (email !== emailConf) {
      setError("Los campos de email no coinciden");
      return; 
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      cantidadTotal: cantidadTotal,
      nombre,
      apellido,
      telefono,
      email,
      fecha: new Date(),
    };

    addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setOrdenId(docRef.id);
        vaciarCarrito();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden");
      });
  };

  if (ordenId) {
    return (
      <div>
        <p className="orden">Gracias por su compra! Su número de orden es <strong>{ordenId}</strong></p>
        <Link to={"/"}>Volver a Productos</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={manejadorFormulario}>
        {carrito.map((producto) => (
          <div key={producto.item.id}>
            <p>
              {producto.item.nombre} x {producto.cantidad}
            </p>
            <p>Precio: ${producto.item.precio}</p>
            <hr />
          </div>
        ))}
        {(total > 0) && <strong>Total: ${total}</strong>}
        <hr />
        <div className="formInput">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div  className="formInput">
          <label htmlFor="apellido">Apellido</label>
          <input
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="formInput">
          <label htmlFor="telefono">Teléfono</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="formInput">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formInput">
          <label htmlFor="emailconf">Email Confirmación</label>
          <input
            type="email"
            value={emailConf}
            onChange={(e) => setEmailConf(e.target.value)}
          />
        </div>
        <button type="submit">Finalizar Compra</button>
      </form>

      {error && <p className="error">{error}</p>}

    </div>
  );  
};

export default Checkout;
