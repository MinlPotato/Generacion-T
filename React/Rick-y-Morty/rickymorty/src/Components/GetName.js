import axios from "axios";
import { useEffect, useState } from "react";



   function GetName(props) {
    const [episodio, setData] = useState([]);
     useEffect(() => {
      axios.get(props.info).then((response) => {
        setData(response.data);
      });
     }, [])
    
   
  return (
    <div> {episodio.name} </div>
  )
}

export default GetName