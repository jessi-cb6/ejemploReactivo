import { useEffect, useState } from "react";
import api from "./services/api";
import './carrito.css';

function Carrito() {

    const [detalles, setDetalles] = useState([]);
    const [loading, setLoading] = useState(true);

    const obtenerDatos = async () => {
        try {

            const response = await api.get('/detalles');
            setDetalles(response.data);

        } catch (error) {
            console.error(error);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        obtenerDatos();
    }, []);

    const eliminar = async (id) => {
        try {
            await api.delete(`/detalle/${id}`);
            obtenerDatos();
        } catch (error) {
            console.error(error);
        }
    };

    if (loading) return <p>Cargando...</p>;

    return (
        <main className="Main">

            <h1>Mi Carrito</h1>

            {detalles.map((item) => (

                <div key={item.id} className="carts">

                    <h2>{item.producto?.nombre}</h2>

                    <p>Cantidad: {item.cantidad}</p>

                    <p>Precio Unitario: $ {item.precio_unitario}</p>

                    <p>
                        Total: $
                        {item.cantidad * item.precio_unitario}
                    </p>

                    <button onClick={() => eliminar(item.id)}>
                        Quitar
                    </button>

                </div>

            ))}

        </main>
    );
}

export default Carrito;