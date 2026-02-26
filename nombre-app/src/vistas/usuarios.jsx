import api from "../services/api";
import { useEffect, useState } from "react";
import "./usurios.css";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const response = await api.get("users");
        setUsuarios(response.data);
      } catch (error) {
        console.error("Error al obtener los usuarios", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerUsuarios();
  }, []);

  const eliminarUsuario = async (id) => {
    try {
      await api.delete(`users/${id}`);
      setUsuarios(usuarios.filter((u) => u.id !== id));
    } catch (error) {
      console.error("Error al eliminar usuario", error);
    }
  };

  const editarUsuario = (id) => {
    alert("Aquí puedes redirigir a editar usuario con id: " + id);
    // ejemplo: navigate(`/editar/${id}`)
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <main className="classMain">
      <h1>Usuarios</h1>

      <table className="tabla-usuarios">
        <thead>
          <tr>
            <th>Email</th>
            <th>Username</th>
            <th>Contraseña</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.email}</td>
              <td>{usuario.username}</td>
              <td>{usuario.password}</td>
              <td>
                <button 
                  className="btn editar"
                  onClick={() => editarUsuario(usuario.id)}
                >
                  Editar
                </button>

                <button 
                  className="btn eliminar"
                  onClick={() => eliminarUsuario(usuario.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default Usuarios;