import { useState } from "react";
import "./inicioS.css"
function InicioS(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);

        alert("Intentando iniciar sesión");
    };

    return(
        <div className="login-container">

            <form className="login-form" onSubmit={handleSubmit}>

                <h2>Iniciar Sesión</h2>

                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                />

                <button type="submit">
                    Ingresar
                </button>

            </form>

        </div>
    )
}

export default InicioS