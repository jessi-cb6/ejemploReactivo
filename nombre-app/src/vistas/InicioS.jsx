import { useState } from "react";
import axios from "axios";
import api from "../services/api";


const InicioS =({cheVista})=>{

    const[username, setUsername]=useState('');
    const[password, setPassword]=useState('');
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const credenciales ={username, password};
        try{
            const respuesta=await api.post('/auth/login/', credenciales);
            if(respuesta.data.token){
                login (respuesta.data.token);
                alert('Autenticacion Autorizada');
                console.log(respuesta.data.token)
                cheVista('Usuarios');
            }else{
                alert('Credenciales invalidas');    
            }
        }catch(error){
            alert('Error:',error);
            console.error("Error:",error);
        }
    };

    return (
        <div>
            <form className="form" onSubmit={handleSubmit}>
                
                <input 
                    type="text" 
                    placeholder="ejemplo@correo"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                />

                <input 
                    type="password" 
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />

                <button type="submit">
                    Entrar
                </button>

            </form>
        </div>
    );
}


export default InicioS;