import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import Footer from './Footer';

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10));


  const[placeholder,setPlaceholder]=useState('#f15025')

  const submitHandler = (event) => {
    event.preventDefault();


    try { 
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
      setPlaceholder(color.value);
     
      
    } catch (error) {
      setError(true);
      console.log(error);
      setColor("");
      setPlaceholder('');
      }
  };



  const changeColorHandler=(event)=>{
    setColor(event.target.value) 
  }

  return (
    <>
      <section className="container">
        <h3>color generator </h3>
        <form onSubmit={submitHandler}> 
        <input type="text" id="color" name="color" value={color} placeholder={placeholder} onChange={changeColorHandler} className={`${error ? "error":""}`} />
        <button type="submit" className="btn" > generate </button>
        </form>
      </section>

      <section className="colors">

        {error && <p className="error-message">please enter valid color number !</p>}
        
        {!error && 
                   list.map((color,index)=>(
                   <SingleColor key= {index} {...color} index={index} hexColor={color.hex}/>
                  ))
        }
        
      </section>
      <Footer/>
    </>
  );
}

export default App;  
