import "./biblioteca.css"
import api from "../services/api"
import { useEffect, useState } from 'react';
import Registro from "../RegistrarProductos";

function Productos(){
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    // 1. Estado para el producto que se va a editar
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const obtenerProductos = async () => {
        try {
            const response = await api.get("/products");
            setProductos(response.data);
        } catch (error) {
            console.error("Error al obtener productos:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        obtenerProductos();
    }, []);

    const removeProducto = async (productoId) => {
        if (!window.confirm("¿Eliminar este producto?")) return;
        try {
            // Corregido: ruta de products
            await api.delete(`/products/${productoId}`);
            alert("Producto eliminado correctamente");
            obtenerProductos(); // Recargar lista
        } catch (error) {
            alert("Error al eliminar producto");
            console.error(error); 
        }
    };

    if (loading) return <p>Cargando.....</p>

    return (
        <div className='dos'>
            <main className='Main'>
                <header>
                    <h1>Productos</h1>
                </header>

                {/* 2. Pasamos las props al componente Registro */}
                <Registro 
                    productoE={productoSeleccionado} 
                    limpiarSeleccion={() => setProductoSeleccionado(null)} 
                    onActualizacion={obtenerProductos} 
                />

                <div className='cuadro'>
                    {productos.map((producto) => (
                        <article key={producto.id}>
                            <div className='tarjetas'>
                                <h2>{producto.title}</h2>
                                <img src={producto.image} alt={producto.title} />
                                <h3>${producto.price}</h3>
                                
                                {/* 3. Botón para Editar */}
                                <button 
                                    onClick={() => setProductoSeleccionado(producto)}
                                    style={{ backgroundColor: '#ffc107', marginBottom: '5px' }}
                                >
                                    EDITAR
                                </button>

                                <button onClick={() => removeProducto(producto.id)}>
                                    ELIMINAR
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </div>
    );
}

export default Productos;

