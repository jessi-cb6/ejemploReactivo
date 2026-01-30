import './App.css'
import Encabezado from "./encabezado";
import Expresiones from "./expresiones";
import Pie from './piePagina';

function App() {
  return (

    <div className='texto'>
      <Encabezado/>
      <Expresiones/>
      
  
      
      
      <h1 className='texto1'>
        WEBTOON es la plataforma líder en cómics digitales, destacando por su formato vertical a color, ideal para dispositivos móviles, con una amplia variedad de géneros. 
         Los usuarios elogian la calidad artística y las historias adictivas
      </h1>
<Pie/>
    </div>

  )
}

export default App