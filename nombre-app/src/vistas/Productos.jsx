import "./biblioteca.css"
import api from "../services/api"
import { useEffect, useState } from 'react';
import RegistarProductos from "../RegistrarProductos";




function Productos() {
   const [Productos, setProductos]=useState([]);
   const [loading, setLoading]=useState(true);

   useEffect(()=>{
const obtenerProductos=async ()=>{
   try{
      const response =await api.get("products");
      setProductos(response.data);
   }catch(error){
      console.error("error al obtener los productos", error);

   }finally{
      setLoading(false);
   }
};
obtenerProductos();
   }, []);
   if (loading) return <p>Cargando...</p>;
   return(
      <div>
<main className="classMain">
   <header>
      <h1>Nuestro catalogo</h1>
   </header>
   <RegistarProductos/>
   {Productos.map((Producto)=>(
      <article key={Producto.id}>
         <p>{Producto.title}</p>
         <p>{Producto.price}</p>
         <img src={Producto.image} alt="" />
      </article>
   ))}
</main>

      </div>
   )
 
}

export default Productos