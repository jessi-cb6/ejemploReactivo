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
        <li><strong>Sucursal Centro:</strong> Dirección — Horario</li>
        <li><strong>Sucursal Norte:</strong> Dirección — Horario</li>
        <li><strong>Sucursal Sur:</strong> Dirección — Horario</li>
      </ul>
    </div>
  )
}

export default Sucursales