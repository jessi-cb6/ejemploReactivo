import api from "../services/api";
import { useEffect, useState } from "react";
import "./usurios.css";

function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);


  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoUsuario = { email, username, password };

    try {
      const response = await api.post("users", nuevoUsuario);

      setUsuarios([...usuarios, response.data]);

      alert("Usuario registrado con éxito");

      setEmail("");
      setUsername("");
      setPassword("");

    } catch (error) {
      console.error("Error al registrar usuario", error);
    }
  };

 const removeUsuario = async (usuarioId) => {
  try {
    const response = await api.delete(`/users/${usuarioId}`);
    alert("Usuario eliminado correctamente ");
    console.log(response.data);

    return true;

  } catch (error) {
    alert("Error al eliminar usuario ");
    console.error(error);
    return false;
  }
};

  const editarUsuario = (id) => {
    alert("Aquí puedes redirigir a editar usuario con id: " + id);
  };

  if (loading) return <p>Cargando...</p>;

  return (
    <main className="classMain">
      <h1>Usuarios</h1>

     
      <div className="contenedorUsuarios">

        
        <form className="formProducto" onSubmit={handleSubmit}>
          <h2>Registrar Usuario</h2>

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Registrar</button>
        </form>

        
        <table className="tabla-usuarios">
          <thead>
            <tr>
              <th>Correo electrónico</th>
              <th>Nombre de usuario</th>
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
    </main>
  );

}

export default Usuarios;