import api from "./services/api";
import React,{useState, useEffect} from "react";

function RegistroU({ usuarioE, limpiarSeleccion, onActualizacion }) {
    const [id, setId] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (usuarioE) {
            // 2. Acceso correcto a las propiedades del objeto
            setId(usuarioE.id || '');
            setUsername(usuarioE.username || '');
            setEmail(usuarioE.email || '');
            setPassword(''); // Normalmente no se carga el password por seguridad
        } else {
            resetForm();
        }
    }, [usuarioE]);

    const resetForm = () => {
        setId('');
        setUsername('');
        setEmail('');
        setPassword('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const nuevoUsuario = { id, username, email, password };
        
        try {
            if (usuarioE) {
                // 3. Eliminamos el espacio en blanco de la URL
                const respuesta = await api.put(`/users/${usuarioE.id}`, nuevoUsuario);
                console.log('Usuario actualizado:', respuesta.data);
                alert('Usuario actualizado');
                if (limpiarSeleccion) limpiarSeleccion();
            } else {
                const respuesta = await api.post('/users/', nuevoUsuario);
                console.log('Usuario Registrado', respuesta.data);
                alert('Usuario guardado con éxito');
            }
            
            resetForm();
            if (onActualizacion) onActualizacion();
        } catch (error) {
            console.error('Error de Registro:', error);
            alert('Hubo un error en la operación');
        }
    };

    return (
        <div className="main">
            <h2>{usuarioE ? 'Editar Usuario' : 'Registrar Usuario'}</h2>
            <form className='form' onSubmit={handleSubmit}>
                <input 
                    type="number" 
                    placeholder="Id" 
                    value={id} 
                    onChange={(e) => setId(e.target.value)} 
                    disabled={!!usuarioE} // Opcional: deshabilitar ID si estás editando
                />
                <input 
                    type="text" 
                    placeholder="User Name" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="email" // Cambiado a type email para validación básica
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" // Cambiado a type password para ocultar caracteres
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">
                    {usuarioE ? 'Actualizar' : 'Registrar'}
                </button>
            </form>
        </div>
    );
}

export default RegistroU;