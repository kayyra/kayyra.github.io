import React, {useState} from "react";

//Componente basado en una función. 
const ContadorClase = () =>{
    
    //Aquí definimos cual es el valor de este conteo, además de que con el useState estamos generando un valor por defecto. 
    const [conteo, setConteo] = useState(0);

    const incrementar = () => {
        setConteo((prevConteo) => prevConteo +1);
    };

    const reducir = () =>{
        setConteo((prevConteo) => prevConteo -1);
    };

        return(           
            <div>
                <h1 style={{textAlign: "center"}}>Contador de Cliks</h1>   
                <p style={{fontSize: 20, textAlign: "center"}}>Conteo: {conteo} </p>                 
                <button variant="text" onClick={incrementar} style={{marginRight:30, marginLeft: 840, fontSize: 15}} >Sumar Clicks</button>  
                <button onClick={reducir} style={{fontSize: 15}} >Reducir Cliks</button>  
            </div>
        );
    }

export default ContadorClase

