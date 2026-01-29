import './expresiones.css'
import tarjet1 from './assets/tarjet1.jpg'
import tarjet2 from './assets/tarjet2.jpg'
import tarjet3 from './assets/tarjet3.jpg'

function Expresiones(){
    return(
        <div className='tarjetas'>
            <Tarjeta1/>
            <Tarjeta2/>
            <Tarjeta3/>
        </div>
    )
}
function Tarjeta1(){
    return(
<div className='uno'>
    <img src={tarjet1} alt="" />
    <h1>“Buen provecho y cero remordimientos.”</h1>
</div>
    )
}
function Tarjeta2(){
    return(
        <div className='dos'>
            <img src={tarjet2} alt=""/>
            <h1>“El amor entra por el estómago… y el postre también.”</h1>
        </div>

    )
}
function Tarjeta3(){
    return(
       <div className='tres'>  
         <img src={tarjet3} alt=""/>
         <h1>“Buen provecho y cero remordimientos.”</h1>
       </div>

    )
}
export default Expresiones