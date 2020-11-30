import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import BoxG from './components/boxGen.jsx';
import React, { useState } from  'react';
import validateColor from "validate-color";

function App() {


  const [clr, setcolor] = useState("");
  const theColor = clr && validateColor(clr) ? clr : "transparent";
  const [count, setCount] = useState(0);
  //  const [values, setValues] = useState({});
  //const [steps, setSteps] = useState(0);
  const [prevState, setState] = React.useState([]);


   

  const handleSubmit = e => {
      e.preventDefault();
      setCount(prevState => prevState + 1);
      // const newvid ="div"+count.toString();
      // values.newvid = clr;
      // setValues(prevState => prevState.newvid = clr);
      setState(prevState => [...prevState, clr] );
      setcolor("");
    
  
    };

  

  return (
 

<div className="container">
      <div className="jumbotron bg-dark text-light">
        <h1>Box Generator</h1>
      </div>
    
      <div className="row">
        <div className="col-sm-8">
          
          
        </div>   
      </div>

      <div className="row"> 
      <div className="col-sm-10">

      <form  onSubmit = {handleSubmit} novalidate   >
    
    <div className="form-group">
        <label>Type the color: </label> 
        <input name="clr"  type="text" onChange={ (e) => setcolor(e.target.value) }   value={clr}  className="form-control" />
    </div>
   
    <button type="submit" className="btn btn-primary">Submit</button>   
       </form>

     


       <BoxG cr = {prevState} /> 



     </div>
      </div>
    </div>



  );
}

export default App;
