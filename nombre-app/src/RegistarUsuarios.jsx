import React, { useState, useEffect } from "react";
import api from "./services/api";

function RegistroU({ usuarioE, limpiarSeleccion, onActualizacion }) {

    const [id, setId] = useState('');
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rol, setRol] = useState('cliente');

    useEffect(() => {
        if (usuarioE) {
            setId(usuarioE.id || '');
            setNombre(usuarioE.nombre || '');
            setDireccion(usuarioE.direccion || '');
            setTelefono(usuarioE.telefono || '');
            setEmail(usuarioE.email || '');
            setPassword('');
            setRol(usuarioE.rol || 'cliente');
        } else {
            resetForm();
        }
    }, [usuarioE]);

    const resetForm = () => {
        setId('');
        setNombre('');
        setDireccion('');
        setTelefono('');
        setEmail('');
        setPassword('');
        setRol('cliente');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const nuevoUsuario = {
            nombre,
            direccion,
            telefono,
            email,
            password,
            rol,
            fecha_registro: new Date()
        };

        try {

            if (usuarioE) {

                const respuesta = await api.put(`/usuario/${usuarioE.id}`, nuevoUsuario);

                console.log('Usuario actualizado:', respuesta.data);
                alert('Usuario actualizado');

                if (limpiarSeleccion) limpiarSeleccion();

            } else {

                const respuesta = await api.post('/usuarios', nuevoUsuario);

                console.log('Usuario creado:', respuesta.data);
                alert('Usuario registrado correctamente');
            }

            resetForm();

            if (onActualizacion) onActualizacion();

        } catch (error) {
            console.error('Error:', error);
            alert('Error en la operación');
        }
    };

    return (
        <div className="main">

            <h2>
                {usuarioE ? 'Editar Usuario' : 'Registrar Usuario'}
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
                    placeholder="Dirección"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Teléfono"
                    value={telefono}
                    onChange={(e) => setTelefono(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <select
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                >
                    <option value="cliente">Cliente</option>
                    <option value="admin">Admin</option>
                </select>

                <button type="submit">
                    {usuarioE ? 'Actualizar' : 'Registrar'}
                </button>

            </form>
        </div>
    );
}

export default RegistroU;