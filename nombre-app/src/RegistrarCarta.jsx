import React, { useState } from "react";
import api from "./services/api";
import './registrarCartas.css';

function RegistroCartas() {
    const [fecha_creacion, setFechaCreacion] = useState('');
    const [carritos, setCarritos] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');

        // 🔥 VALIDACIÓN CLAVE
        if (!token) {
            alert("Debes iniciar sesión primero");
            return;
        }

        const nuevoCart = {
            fecha_creacion: fecha_creacion
        };

        try {
            const respuesta = await api.post('/carritos', nuevoCart, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            console.log('Carrito registrado:', respuesta.data);

            setCarritos([...carritos, respuesta.data]);

            alert('Carrito guardado con éxito');

            // Limpiar formulario
            setFechaCreacion('');

        } catch (error) {
            console.error('Error al registrar:', error.response?.data || error.message);
            alert('Error al guardar carrito');
        }
    };

    return (
        <div className="contenedorForm">
            <h2>Registrar Carrito</h2>

            <form className='formProducto' onSubmit={handleSubmit}>

                <input 
                    type="date" 
                    value={fecha_creacion} 
                    onChange={(e) => setFechaCreacion(e.target.value)} 
                    required 
                />

                <button type="submit">Registrar</button>
            </form>

            {/* CARDS */}
            <div className="contenedorCards">
                {carritos.map((cart, index) => (
                    <div className="card" key={index}>
                        <h3>Carrito #{cart.id}</h3>
                        <p><strong>ID Usuario:</strong> {cart.id_usuario}</p>
                        <p><strong>Fecha:</strong> {cart.fecha_creacion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RegistroCartas;