import api from "../services/api";
import { useEffect, useState } from "react";
import "./usurios.css";
import axios from "axios";
import RegistroU from "../RegistarUsuarios";

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [usuarioSeleccionado, setUsuarioS] = useState(null);

    const obtenerUsuarios = async () => {
        try {
            const response = await api.get("/users");
            setUsuarios(response.data);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        obtenerUsuarios();
    }, []);

    const removeUsuario = async (usuarioId) => {
        if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return;
        try {
            await api.delete(`/users/${usuarioId}`);
            alert("Usuario eliminado correctamente");
            obtenerUsuarios(); 
        } catch (error) {
            alert("Error al eliminar usuario");
        }
    };

    if (loading) return <p>Cargando.....</p>;

    return (
        <div className='main'>
            
            <RegistroU 
                usuarioE={usuarioSeleccionado} 
                limpiarSeleccion={() => setUsuarioS(null)} 
                onActualizacion={obtenerUsuarios} 
            />
            
            <table className="tabla-usuarios">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Añadir</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.username}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.password}</td>

                            
                            <td>
    <button className="btn-add">
        Añadir
    </button>
</td>

<td>
    <button 
        className="btn-edit"
        onClick={() => setUsuarioS(usuario)}
    >
        Editar
    </button>
</td>

<td>
    <button 
        className="btn-delete"
        onClick={() => removeUsuario(usuario.id)}
    >
        Eliminar
    </button>
</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Usuarios;