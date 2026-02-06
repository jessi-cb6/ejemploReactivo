import "./biblioteca.css"
import ro1 from "../assets/romance1.jpg"
import ro2 from "../assets/romance2.jpg"
import ro3 from "../assets/romance3.jpg"
import ro4 from "../assets/romance4.jpg"
import ro5 from "../assets/romance5.jpg"

import su1 from "../assets/suspenso1.jpg"
import su2 from "../assets/suspenso2.jpg"
import su3 from "../assets/suspenso3.jpg"
import su4 from "../assets/suspenso4.jpg"
import su5 from "../assets/suspenso5.jpg"

import dr1 from "../assets/drama1.jpg"
import dr2 from "../assets/drama2.jpg"
import dr3 from "../assets/drama3.jpg"
import dr4 from "../assets/drama4.jpg"
import dr5 from "../assets/drama5.jpg"




function Productos() {
 return(
    <div className="contenedor">
       <div className="Romance">
       <h1>Romance</h1>
       <div className="fila1">
         <h1>Cuestion de edad </h1>
        <img src={ro1} alt="" />

        <h1>Una atipica historia de reencarnacion</h1>
        <img src={ro2} alt="" />

        <h1>Este matrimonio esta destinado a fracasar</h1>
        <img src={ro3} alt="" />

        <h1>Reflejo</h1>
        <img src={ro4} alt="" />

        <h1>Quizas fue el destino</h1>
        <img src={ro5} alt="" />
       </div>

       </div>

       <div className="suspenso">
        <h1>Suspenso</h1>
        <div className="fila2">
          
            <h1>Mi secreto mas intimo</h1>
        <img src={su1} alt="" />

        <h1>El chico de arriba</h1>
        <img src={su2} alt="" />

        <h1>La asesina de heroes </h1>
        <img src={su3} alt="" />

        <h1>SubZero</h1>
        <img src={su4} alt="" />

        <h1>Dulce hogar</h1>
        <img src={su5} alt="" />

       </div>
        </div>
       
       <div className="drama">
         <h1>Drama</h1>
       <div className="fila3">
          <h1>De villana a heroina</h1>
        <img src={dr1} alt="" />

        <h1>Casate con mi esposo</h1>
        <img src={dr2} alt="" />

        <h1>Atrapada en una telenovela</h1>
        <img src={dr3} alt="" />

        <h1>Tu trono</h1>
        <img src={dr4} alt="" />

        <h1>La emperatriz divorciada</h1>
        <img src={dr5} alt="" />

       </div>
       </div>
    </div>
 )
}

export default Productos