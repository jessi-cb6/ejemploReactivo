import "./expresiones.css"
import tarjet1 from "./assets/tarjet1.jpg"
import tarjet2 from "./assets/tarjet2.jpg"
import tarjet3 from "./assets/tarjet3.jpg"

function Expresiones() {
  return (
    <div className='tarjetas'>
      <Tarjeta1 name="Jessica" descripcion="jessica cruz barona" />
      <Tarjeta2 name="Luis Angel" descripcion="luis angel hernandez hernandez" />
      <Tarjeta3 name="Teodoro" descripcion="teodoro hernandez cruz" saludarfunc={saludar} />
    </div>
  )
}

function Tarjeta1(props) {
  return (
    <div className='uno'>
      <img src={tarjet1} alt="" />
      <h1>{props.name}</h1>
      <h1>{props.descripcion}</h1>
    </div>
  )
}

function Tarjeta2(props) {
  return (
    <div className='dos'>
      <img src={tarjet2} alt="" />
      <h1>{props.name}</h1>
      <h1>{props.descripcion}</h1>
    </div>
  )
}

function Tarjeta3(props) {
  return (
    <div className='tres'>
      <img src={tarjet3} alt="" />
      <h1>{props.name}</h1>
      <h1>{props.descripcion}</h1>
      <p>{props.saludarfunc()}</p>
    </div>
  )
}

function saludar() {
  return (
    <div>
      <h1>Holaa</h1>
    </div>
  )
}

export default Expresiones