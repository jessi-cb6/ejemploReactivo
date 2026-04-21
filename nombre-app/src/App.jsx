import { useState } from "react"
import Encabezado from "./encabezado"
import Expresiones from "./expresiones"
import Pie from "./piePagina"
import Cuadro from "./Cuadro"
import Usuarios from "./vistas/usuarios"
import Carrito from "./Carrito"
import InicioS from "./vistas/InicioS"


import Inicio from "./vistas/inicio"
import AcercaDe from "./vistas/AcercaDe"
import Productos from "./vistas/Productos"
import Contactos from "./vistas/Contactos"
import Sucursales from "./vistas/Sucursales"
import { AuthProvider } from "./AuthContext"

function App() {
  const [vista, setVista] = useState("Inicio")

  return (
    <AuthProvider>
    <div>
      <Encabezado cambiarVista={setVista} />

      {vista === "Inicio" && <Inicio />}
      {vista === "AcercaDe" && <AcercaDe />}
      {vista === "Productos" && <Productos />}
      {vista === "Contactos" && <Contactos />}
      {vista === "Sucursales" && <Sucursales />}
      {vista === "Usuarios" && <Usuarios/>}
      {vista === "Carrito" && <Carrito/>}
      {vista === "InicioS" && <InicioS/>}

      <Cuadro/>
      <Pie />
    </div>
    </AuthProvider>
  )
}

export default App