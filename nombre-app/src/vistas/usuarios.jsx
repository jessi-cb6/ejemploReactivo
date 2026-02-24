import api from "../services/api";
import { useEffect, useState } from "react";

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

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
    <main className="classMain">
      <header>
        <h1>Usuarios</h1>
      </header>

      {usuarios.map((usuario) => (
        <article key={usuario.id}>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Username:</strong> {usuario.username}</p>
          <p><strong>Contraseña:</strong> {usuario.password}</p>
        </article>
      ))}
    </main>
    </div>
  )
}

export default Usuarios;