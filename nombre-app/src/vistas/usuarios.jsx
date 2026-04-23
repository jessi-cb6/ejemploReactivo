import { useEffect, useState } from 'react';
import { useAuth } from '../AuthContext';
import api from '../services/api';
import './usurios.css'

import RegistroU from '../RegistarUsuarios';
function Usuarios() {

    const { user } = useAuth();

    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usuarioSeleccionado, setUsuarioS] = useState(null);

    const obtenerUsuarios = async () => {
        try {
            if (user?.rol === 'admin') {
                const response = await api.get('/usuarios');
                setUsuarios(response.data);
            } else {
                const response = await api.get(`/usuario/${user.id}`);
                setUsuarios([response.data]);
            }
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            obtenerUsuarios();
        }
    }, [user]);

    const removeUsuario = async (usuarioId) => {
        if (user?.rol !== 'admin') return;
        if (!window.confirm("¿Eliminar usuario?")) return;

        try {
            await api.delete(`/usuario/${usuarioId}`);
            alert("Usuario eliminado");
            obtenerUsuarios();
        } catch (error) {
            alert("Error al eliminar");
        }
    };

    if (loading) return <p>Cargando...</p>;

    return (
        <div className='main'>
            {user?.rol === 'admin' && (
                <RegistroU
                    usuarioE={usuarioSeleccionado}
                    limpiarSeleccion={() => setUsuarioS(null)}
                    onActualizacion={obtenerUsuarios}
                />
            )}

            <table className="tabla-usuarios">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Rol</th>
                        {user?.rol === 'admin' && (
                            <>
                                <th>Editar</th>
                                <th>Eliminar</th>
                            </>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.direccion}</td>
                            <td>{usuario.telefono}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.rol}</td>

                            {user?.rol === 'admin' && (
                                <>
                                    <td>
                                        <button
                                            className="btn-editar"
                                            onClick={() => setUsuarioS(usuario)}
                                        >
                                            Editar
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            className="btn-eliminar"
                                            onClick={() => removeUsuario(usuario.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Usuarios;