import Mapa from "../mapa"
import "./sucursal.css"
function Sucursales() {
  return (
    <div className="sucursales-contenedor">
      <h1 className="titulo-sucursales">Nuestras sucursales</h1>

      <p className="texto-sucursales">
        Estamos presentes en varias ubicaciones para brindarte un mejor servicio.
        Cada sucursal está equipada para atenderte con calidad, rapidez y un ambiente cómodo.
           
      </p>

      <ul className="lista-sucursales">
        <li><strong>Sucursal Centro:</strong> Dirección — Horario
          <Mapa 
  lat={20.23995}
  lng={-97.95375}
  nombre="Sucursal Centro"
/>

        </li>
        <li><strong>Sucursal Norte:</strong> Dirección — Horario
         <Mapa 
  lat={20.27800830458467}
  lng={-97.95886361327837}
  nombre="Sucursal dos"
/>
        </li>
        <li><strong>Sucursal Sur:</strong> Dirección — Horario
          <Mapa 
  lat={ 20.214069346472424}
  lng={-97.99800240527235}
  nombre="Sucursal dos"/>
        </li>
      </ul>
    </div>
  )
}

export default Sucursales