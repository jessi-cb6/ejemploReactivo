import React, { useState, useEffect } from "react";
import api from "./services/api";
import './RegistrarProductos.css';

function Registro({ productoE, limpiarSeleccion, onActualizacion }) {

    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [id_categoria, setIdCategoria] = useState('');
    const [stock, setStock] = useState('');

    useEffect(() => {
        if (productoE) {
            setNombre(productoE.nombre || '');
            setPrecio(productoE.precio || '');
            setDescripcion(productoE.descripcion || '');
            setIdCategoria(productoE.id_categoria || '');
            setStock(productoE.stock || '');
        } else {
            resetForm();
        }
    }, [productoE]);

    const resetForm = () => {
        setNombre('');
        setPrecio('');
        setDescripcion('');
        setIdCategoria('');
        setStock('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoProducto = {
            nombre: nombre,
            descripcion: descripcion,
            precio: Number(precio),          // 👈 importante convertir a número
            stock: Number(stock),            // 👈 importante convertir a número
            id_categoria: Number(id_categoria) // 👈 importante
        };

        try {
            if (productoE) {
                await api.put(`/productos/${productoE.id}`, nuevoProducto);
                alert('Producto actualizado con éxito');
                if (limpiarSeleccion) limpiarSeleccion();
            } else {
                await api.post('/productos', nuevoProducto);
                alert('Producto guardado con éxito');
            }

            resetForm();
            if (onActualizacion) onActualizacion();

        } catch (error) {
            console.error("Error completo:", error.response?.data || error.message);
            alert('Error al procesar producto');
        }
    };

    return (
        <div className="main">
            <h2>{productoE ? 'Editar Producto' : 'Registrar Producto'}</h2>

            <form className='form' onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />

                <input
                    type="text"
                    placeholder="Descripción"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    required
                />

                <input
                    type="number"
                    placeholder="Stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="ID Categoría"
                    value={id_categoria}
                    onChange={(e) => setIdCategoria(e.target.value)}
                />

                <button type="submit">
                    {productoE ? 'Actualizar Producto' : 'Registrar Producto'}
                </button>

            </form>
        </div>
    );
}

export default Registro;