

import { useEffect, useState } from 'react';




const SingleColor = ({rgb,weight,index,hexColor}) => {

    const [alert,setAlert]=useState(false);

    const bcg= rgb.join(',')
  

    const hexValue=`#${hexColor}`;


    const copyHandler=()=>{
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
    }

    useEffect(()=>{

        const timeout=setTimeout(()=>{
            setAlert(false)
        },2000)
        
        return ()=> clearTimeout(timeout);

    },[alert])

    return ( 
        <article className={`color ${index > 10 && " color-light"}`} style={{backgroundColor:`rgb(${bcg})`}}  onClick={copyHandler}>
         <p className="percent-value"> {weight}%</p>
         <p className="color-value"> {hexValue}</p>
         {alert && <p className="alert"> copied to clipboard </p>}
        </article>
     );
}
 
export default SingleColor;