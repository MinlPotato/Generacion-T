import {useState, useEffect} from 'react'
import { AllProductos, ProductoAPI } from "../Functions/Functions";
import { productos } from '../Assets/Productosjson';
import Card from '../Card/Card';
import './Productos.css'

 const Productos = () => {
   const [productoss, setProductos] = useState(null);
   useEffect(() => {
    setProductos(productos)
   }, []);

   return (
     <>
       <div className="scroll d-flex flex-start gap-4 flex-nowrap p-4">
         {productoss != null ? (
           productoss.map((producto) => (
             <div key={producto.id}>
               <Card info={producto} />
             </div>
           ))
         ) : (
           <div className="spinner-border" role="status">
             <span className="visually-hidden">Loading...</span>
           </div>
         )}
       </div>
     </>
   );
 };

export default Productos