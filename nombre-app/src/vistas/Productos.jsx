import { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import api from '../services/api';
import Registro from '../RegistrarProductos';
import './biblioteca.css'

function Productos() {

    const { user } = useAuth();

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);

    const obtenerProductos = async () => {
        try {
            const response = await api.get('/productos');
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

        if (user?.rol !== 'admin') return;

        try {
            await api.delete(`/producto/${productoId}`);
            alert("Producto eliminado");
            obtenerProductos();
        } catch (error) {
            alert("Error al eliminar");
            console.error(error);
        }
    };

    const agregarCarrito = async (producto) => {

        if (!user) return;

        try {

            const token = localStorage.getItem('token');

            const carrito = await api.post(
                '/carritos',
                {
                    id_usuario: user.id,
                    fecha_creacion: new Date()
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            await api.post(
                '/detalles',
                {
                    id_carrito: carrito.data.id,
                    id_producto: producto.id,
                    cantidad: 1,
                    precio_unitario: producto.precio
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert('Producto agregado al carrito');

        } catch (error) {
            console.error(error);
            alert('Error al agregar');
        }
    };

    if (loading) return <p>Cargando...</p>;

    return (
        <div className='dos'>
            <main className='Main'>

                <header>
                    <h1>Productos</h1>
                </header>

                {user?.rol === 'admin' && (
                    <Registro
                        productoE={productoSeleccionado}
                        limpiarSeleccion={() => setProductoSeleccionado(null)}
                        onActualizacion={obtenerProductos}
                    />
                )}

                <div className='cuadro'>

                    {productos.map((producto) => (
                        <article key={producto.id}>

                            <div className='tarjetas'>

                                <h2>{producto.nombre}</h2>
                                <p>{producto.descripcion}</p>
                                <h3>$ {producto.precio}</h3>
                                <p>Stock: {producto.stock}</p>

                                {user?.rol === 'cliente' && (
                                    <button onClick={() => agregarCarrito(producto)}>
                                        AGREGAR AL CARRITO
                                    </button>
                                )}

                                {user?.rol === 'admin' && (
                                    <>
                                        <button onClick={() => setProductoSeleccionado(producto)}>
                                            EDITAR
                                        </button>

                                        <button onClick={() => removeProducto(producto.id)}>
                                            ELIMINAR
                                        </button>
                                    </>
                                )}

                            </div>

                        </article>
                    ))}

                </div>

            </main>
        </div>
    );
}

export default Productos;