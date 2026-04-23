import { useState } from "react";
import { useAuth } from "../AuthContext";
import api from "../services/api";
import './inicioS.css';

const Login = ({ chVista }) => {
  const { login } = useAuth();

  const [modo, setModo] = useState("login");

  // login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // registro
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');

  // 🔐 LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await api.post('/login', {
        email,
        password
      });

      if (respuesta.data.token) {
        login(respuesta.data.token);

        const payload = JSON.parse(
          atob(respuesta.data.token.split('.')[1])
        );

        alert('Autenticación autorizada');

        // 👇 Corrección: ahora coincide con App.jsx
        if (payload.rol === 'admin') {
          chVista('Usuarios');   // antes 'Admin'
        } else {
          chVista('Carrito');    // antes 'Inicio'
        }

      } else {
        alert('Credenciales inválidas');
      }

    } catch (error) {
      alert('Error al iniciar sesión');
      console.error(error);
    }
  };

  // 📝 REGISTRO
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await api.post('/usuarios', {
        nombre,
        direccion,
        telefono,
        email,
        password,
        rol: 'cliente',
        fecha_registro: new Date()
      });

      alert('Cuenta creada correctamente');

      setNombre('');
      setDireccion('');
      setTelefono('');
      setEmail('');
      setPassword('');

      setModo("login");

    } catch (error) {
      alert('Error al registrar');
      console.error(error);
    }
  };

  return (
    <div className="login-wrapper">
      {modo === "login" ? (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Iniciar Sesión</h2>

          <input
            type="text"
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

          <button type="submit">
            Entrar
          </button>

          <p onClick={() => setModo("registro")}>
            ¿No tienes cuenta? Regístrate
          </p>
        </form>
      ) : (
        <form className="login-form" onSubmit={handleRegister}>
          <h2>Crear Cuenta</h2>

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
            type="text"
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

          <button type="submit">
            Registrarse
          </button>

          <p onClick={() => setModo("login")}>
            Ya tengo cuenta
          </p>
        </form>
      )}
    </div>
  );
};

export default Login;