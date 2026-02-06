import "./contactos.css"
function Contactos() {
  return(
   <div className="fondo">
  <div className="carta">
    <h2>Contacto</h2>

    <form className="formulario">
      <label>
        Nombre
        <input type="text" placeholder="Escribe tu nombre" />
      </label>

      <label>
        Teléfono
        <input type="tel" placeholder="Ej. 7761188222" />
      </label>

      <label>
        Créditos
        <input type="text" placeholder="App Webtoon" />
      </label>

      <button type="submit">Enviar</button>
    </form>
  </div>
</div>

  )
}

export default Contactos