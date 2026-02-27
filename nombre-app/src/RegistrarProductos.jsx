import React, { useState } from "react";
import api from "./services/api";

function RegistarProductos() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoProducto = { 
      title, 
      price, 
      description, 
      category, 
      image 
    };

    try {
      const respuesta = await api.post('products', nuevoProducto);
      console.log('Producto registrado:', respuesta.data);
      alert('¡Producto guardado con exito!');

      setTitle('');
      setPrice('');
      setDescription('');
      setCategory('');
      setImage('');

    } catch (error) {
      console.error('Error al registrar', error);
    }
  };

  return (
    <div className="contenedorForm">
      <h2>Registrar Producto</h2>

      <form className="formProducto" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
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
          placeholder="Imagen"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default RegistarProductos;