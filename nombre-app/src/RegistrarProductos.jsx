import React, { useState, useEffect } from "react";
import api from "./services/api";


function Registro({ productoE, limpiarSeleccion, onActualizacion }) {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    // 2. useEffect para detectar si vamos a editar un producto existente
    useEffect(() => {
        if (productoE) {
            setTitle(productoE.title || '');
            setPrice(productoE.price || '');
            setDescription(productoE.description || '');
            setCategory(productoE.category || '');
            setImage(productoE.image || '');
        } else {
            resetForm();
        }
    }, [productoE]);

    const resetForm = () => {
        setTitle('');
        setPrice('');
        setDescription('');
        setCategory('');
        setImage('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoProducto = { title, price, description, category, image };
        
        try {
            if (productoE) {
                // MODO EDICIÓN (PUT)
                const respuesta = await api.put(`/products/${productoE.id}`, nuevoProducto);
                console.log('Producto actualizado:', respuesta.data);
                alert('Producto actualizado con éxito');
                if (limpiarSeleccion) limpiarSeleccion();
            } else {
                // MODO CREACIÓN (POST)
                const respuesta = await api.post('/products', nuevoProducto);
                console.log('Producto registrado:', respuesta.data);
                alert('Producto guardado con éxito');
            }
            
            resetForm();
            if (onActualizacion) onActualizacion(); // Refresca la lista en el componente padre
        } catch (error) {
            console.error('Error en la operación:', error);
            alert('Hubo un error al procesar el producto');
        }
    };

    return (
        <div className="main">
            {/* Título dinámico */}
            <h2>{productoE ? 'Editar Producto' : 'Registrar Producto'}</h2>
            
            <form className='form' onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Titulo" 
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)} 
                    required 
                />

                <input 
                    type="number" 
                    placeholder="Precio" 
                    value={price} 
                    onChange={(e) => setPrice(e.target.value)} 
                    required 
                />

                <input 
                    type="text" 
                    placeholder="Descripcion" 
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />

                <input 
                    type="text" 
                    placeholder="Categoria" 
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)} 
                />

                <input 
                    type="text" 
                    placeholder="URL Imagen" 
                    value={image} 
                    onChange={(e) => setImage(e.target.value)} 
                />

                {/* Texto del botón dinámico */}
                <button type="submit">
                    {productoE ? 'Actualizar Producto' : 'Registrar Producto'}
                </button>
            </form>
        </div>
    );
}

export default Registro;