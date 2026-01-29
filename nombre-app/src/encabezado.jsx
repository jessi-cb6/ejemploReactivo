import './encabezado.css'
import  yutu from './assets/yutu.webp' 
import  wats from './assets/wats.webp' 
import  insta from './assets/insta.webp' 
import  face from './assets/face.webp' 
import  logo from './assets/logo.png' 
function Encabezado(){
    
    return (
        <div className='encabezado'>
            <Logotipo/>
            <Menu/>
            <Redes/>
        </div>
    )
}
function Logotipo(){
    return(
        <div className='logo'>
            <img src={logo} alt="" />
        </div>
    )
}

function Menu (){
    return (
        <div className='Menu'>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contactos</li>
                <li>Sucursales</li>
            </ul>
        </div>
    )
}

function Redes(){
    return(
        <div className='Redes'>
            <ul>
                <img src={face} alt="" />
                <img src={wats} alt="" />
                <img src={insta} alt="" />
                <img src={yutu} alt="" />
            </ul>
        </div>
    )
}

export default Encabezado