import '.Promociones.css'
function Promociones(props){
    let user =props
    console.info(user)
    if (user.name!=""){
        return (
            <div className='texto1'>
                <h3>seleccion de promociones</h3>
                <p>en esta secciomn se da a conocer la informacion correspondientea promociones</p>
            </div>
        )
    }return(
        <div>
            <h3>no hay datos</h3>
        </div>
    )
}
export default Promociones