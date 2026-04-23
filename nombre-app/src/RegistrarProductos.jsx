import React, { useState, useEffect } from "react";
import api from "./services/api";
import './RegistrarProductos.css';

function Registro({ productoE, limpiarSeleccion, onActualizacion }) {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [idCategoria, setIdCategoria] = useState('');

    useEffect(() => {

        if (productoE) {

            setNombre(productoE.nombre || '');
            setDescripcion(productoE.descripcion || '');
            setPrecio(productoE.precio || '');
            setStock(productoE.stock || '');
            setIdCategoria(productoE.id_categoria || '');

        } else {
            resetForm();
        }

    }, [productoE]);

    const resetForm = () => {
        setNombre('');
        setDescripcion('');
        setPrecio('');
        setStock('');
        setIdCategoria('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoProducto = {
            nombre,
            descripcion,
            precio,
            stock,
            id_categoria: idCategoria
        };

        try {

            if (productoE) {

                await api.put(`/producto/${productoE.id}`, nuevoProducto);
                alert('Producto actualizado');

                if (limpiarSeleccion) limpiarSeleccion();

            } else {

                await api.post('/productos', nuevoProducto);
                alert('Producto creado');
            }

            resetForm();

            if (onActualizacion) onActualizacion();

        } catch (error) {
            console.error(error);
            alert('Error en la operación');
        }
    };

    return (
        <div className="main">

            <h2>
                {productoE ? 'Editar Producto' : 'Registrar Producto'}
            </h2>

            <form className="form" onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
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
                    value={idCategoria}
                    onChange={(e) => setIdCategoria(e.target.value)}
                />

                <button type="submit">
                    {productoE ? 'Actualizar' : 'Registrar'}
                </button>

            </form>

        </div>
    );
}

export default Registro;