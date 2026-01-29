function Expresiones(){
    const nombre = 'Jessica';
    const apellidos='Cruz'
    return(
        <div>
            <h2>Expresiones</h2>
            <h3>Tu nombre es:{nombre } y tus apellidos son:{apellidos}</h3>
            <Lista/>
        </div>
    )
    
}

function Lista(){
    const users =[
        {id: 1, name: 'Luis', role:'web designer'},
        {id: 2, name: 'Jessi', role: 'developer'},
        {id: 3, name: 'Juan', role:'webscript'},
    ]
    return(
        <div>
            <table>
                <tbody>
                   <tr>
                        <th> Nombre </th>
                        <th> Role </th>
                   </tr>
                   <tr>
                        {
                            users.map(function(user,index){
                                return (
                                    <tr key={index}>
                                    <td>(user.name)</td>
                                    <td>(user.role)</td>
                                    </tr>
                                )
                            })
                        }
                   </tr> 
                </tbody>
            </table>
        </div>
    )
}
export default Expresiones