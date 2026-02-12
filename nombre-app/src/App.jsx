import { useState } from "react"
import Encabezado from "./encabezado"
import Expresiones from "./expresiones"
import Pie from "./piePagina"
import Cuadro from "./cuadro"


import Inicio from "./vistas/inicio"
import AcercaDe from "./vistas/AcercaDe"
import Productos from "./vistas/Productos"
import Contactos from "./vistas/Contactos"
import Sucursales from "./vistas/Sucursales"

function App() {
  const [vista, setVista] = useState("Inicio")

  return (
    <div>
      <Encabezado cambiarVista={setVista} />

      {vista === "Inicio" && <Inicio />}
      {vista === "AcercaDe" && <AcercaDe />}
      {vista === "Productos" && <Productos />}
      {vista === "Contactos" && <Contactos />}
      {vista === "Sucursales" && <Sucursales />}

      <Expresiones />
      <Cuadro/>
      <Pie />
    </div>
  )
}

export default App