
import Clima from "./Clima"
import PropTypes from "prop-types"
import "./encabezado.css"
import yutu from "./assets/yutu.webp"
import wats from "./assets/wats.webp"
import insta from "./assets/insta.webp"
import face from "./assets/face.webp"
import logo from "./assets/logo.png"
import { useAuth } from "./AuthContext"

function Encabezado({ cambiarVista }) {
  return (
    <div className='encabezado'>
      <Logotipo />
      <Menu cambiarVista={cambiarVista} />
      <Redes />
    </div>
  )
}

function Logotipo() {
  return (
    <div className='logo'>
      <img src={logo} alt="" />
    </div>
  )
}

function Menu({ cambiarVista }) {
  const {isLoggedIn}=useAuth();
  return (
    <div className='Menu'>
      <ul>
        <li onClick={() => cambiarVista("Inicio")}>Inicio</li>
        <li onClick={() => cambiarVista("AcercaDe")}>Acerca de</li>
        <li onClick={() => cambiarVista("Productos")}>Biblioteca</li>
        <li onClick={() => cambiarVista("Contactos")}>Contactos</li>
        <li onClick={() => cambiarVista("Sucursales")}>Sucursales</li>
        
      {isLoggedIn ? (
    <>
        <li onClick={() => cambiarVista("Usuarios")}>Usuarios</li>
        <li onClick={() => cambiarVista("Carrito")}>Carrito</li>
        <li>Cerrar Sesión</li>
    </>
) : (
    <li onClick={() => cambiarVista("InicioS")}>Iniciar Sesión</li>
)}
      </ul>
    </div>
  )
}

function Redes() {
  return (
    <div className='Redes'>
      <img src={face} alt="" />
      <img src={wats} alt="" />
      <img src={insta} alt="" />
      <img src={yutu} alt="" />
      <Clima />
    </div>

  )
}

Menu.propTypes = {
  cambiarVista: PropTypes.func.isRequired
}

Encabezado.propTypes = {
  cambiarVista: PropTypes.func.isRequired
}

export default Encabezado