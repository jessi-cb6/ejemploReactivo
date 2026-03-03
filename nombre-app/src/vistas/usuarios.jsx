import api from "../services/api";
import { useEffect, useState } from "react";
import "./usurios.css";
import axios from "axios";

function Usuarios({ usuarioEditando, limpiarSeleccion, onActualizacion }) {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);


  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (usuarioEditando) {
      setUsername(usuarioEditando.username);
      setEmail(usuarioEditando.email);
      setPassword('');

    } else {
      resetForm
    }
  }, [usuarioEditando]);
  const resetForm = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoUsuario = { email, username, password };

    try {
      if (usuarioEditando) {
        const respuesta = await api.put(`/users/${usuarioEditando.id}`, nuevoUsuario);
        console.log('usuario actualizado:', respuesta.data);
        alert('¡usuario actalizado con exito!');
        limpiarSeleccion();



      } else {
        const respuesta = await api.post('/users', nuevoUsuario);
        console.log('usuario registrado:', respuesta.data);
        alert('¡usuario guardado con exito');

      }
      resetForm();
      if (onActualizacion) onActualizacion();
    } catch (error) {
      console.error("Error al registrar usuario", error);
    }finally{
      setLoading(false)
    }
  };

  const removeUsuario = async (usuarioId) => {
    try {
      console.log("Eliminando usuario con ID:", usuarioId);

      const response = await api.delete(`/users/${usuarioId}`);
      console.log("Respuesta de la API:", response);

      alert("Usuario eliminado correctamente");

      setUsuarios(usuarios.filter(usuario => usuario.id !== usuarioId));

    } catch (error) {
      console.error("Error al eliminar usuario", error);
      alert("Error al eliminar usuario");
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