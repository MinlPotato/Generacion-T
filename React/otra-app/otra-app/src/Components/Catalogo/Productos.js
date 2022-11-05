import {useState, useEffect} from 'react'
import { AllProductos, ProductoAPI } from "../Functions/Functions";
import Card from '../Card/Card';

 const Productos = () => {
   const [productos, setProductos] = useState(null);
   useEffect(() => {
    AllProductos(setProductos)
   }, []);

   return (
     <>
       <div className="d-flex flex-start gap-4 flex-wrap">
         {productos != null ? (
           productos.map((producto) => (
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