import "./expresiones.css"
import tarjet1 from "./assets/tarjet1.jpg"
import tarjet2 from "./assets/tarjet2.jpg"
import tarjet3 from "./assets/tarjet3.jpg"

function Expresiones() {
  return (
    <div className='tarjetas'>
      <Tarjeta1 name="Romance" descripcion="Historias que celebran el encuentro, la chispa y la magia de dos almas que se transforman al descubrirse. Si buscas emociones cálidas y conexiones que te hagan suspirar, este es tu lugar." />
      <Tarjeta2 name="Suspenso" descripcion="Relatos donde cada página es una pista y cada silencio es una amenaza. Sumérgete en tramas que aceleran el pulso y te mantienen alerta hasta el último giro inesperado." />
      <Tarjeta3 name="Drama" descripcion="Narrativas profundas que exploran conflictos humanos, decisiones difíciles y emociones intensas. Para quienes disfrutan historias que tocan fibras sensibles y dejan huella" saludarfunc={saludar} />
    </div>
  )
}

function Tarjeta1(props) {
  return (
    <div className='uno'>
      <img src={tarjet1} alt="" />
      <h1 className = 'tiuno'>{props.name}</h1>
      <h1>{props.descripcion}</h1>
    </div>
  )
}

function Tarjeta2(props) {
  return (
    <div className='dos'>
      <img src={tarjet2} alt="" />
      <h1 className = 'tiuno'>{props.name}</h1>
      <h1>{props.descripcion}</h1>
    </div>
  )
}

function Tarjeta3(props) {
  return (
    <div className='tres'>
      <img src={tarjet3} alt="" />
      <h1 className = 'tiuno'>{props.name}</h1>
      <h1>{props.descripcion}</h1>
      <p>{props.saludarfunc()}</p>
    </div>
  )
}

function saludar() {
  return (
    <div>
      
    </div>
  )
}

export default Expresiones