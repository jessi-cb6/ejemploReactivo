import React, {useState} from "react";
import axios from "axios";
import api from "./services/api";
import './RegistrarProductos.css' 

function RegistroCartas(){

    const [id, setId]= useState('');
    const [userId, setUserId]= useState('');
    const[date,setDate]=useState('');
    const [productId, setProductoId]= useState('');
    const [quantity, setQuiantity]= useState('');

    const handleSubmit =async (e)=>{
        e.preventDefault();
        const nuevoProducto={id, userId,date, productId, quantity};
        try{
            const respuesta = await api.post('/carts', nuevoCart);
            console.log('Carrito registrado:' ,respuesta.data);
            alert('Carrito guardado');
        } catch(error){
            console.error('Error al registrar:', error);
        }
    }

    return(
        <div className="contenedorForm">
            <h2>Registrar Producto</h2>
            <form  className='formProducto' onSubmit={handleSubmit}>
                <input 
                type="number" 
                placeholder="Id" 
                value={id} 
                onChange={(e)=> setId(e.target.value)} 
                />

                <input 
                type="number" 
                placeholder="UserId" 
                value={userId} 
                onChange={(e)=> setUserId(e.target.value)} 
                />

                <input 
                type="date" 
                placeholder="Date" 
                value={date} 
                onChange={(e)=> setDate(e.target.value)} 
                />

                <input 
                type="number" 
                placeholder="ProductId" 
                value={productId} 
                onChange={(e)=> setProductoId(e.target.value)} 
                />

                <input 
                type="number" 
                placeholder="Cantidad" 
                value={quantity} 
                onChange={(e)=> setQuiantity(e.target.value)} 
                />
                <button type="submit">Registrar</button>

            </form>
        </div>
    )

}
export default RegistroCartas