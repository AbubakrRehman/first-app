import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [inputt, setInput] = useState('');
  const [listt, setListt] = useState([]);

  let deletee =(id)=>{
    console.log("clicked");
    setListt((prevListt)=>{
     return  prevListt.filter((item,index)=>{
        return index!==id;
      });
    });
   
   
  }

  let listtt = listt.map((item,index) =>
    <div key={index} >
      <span>{item}</span>
      <button onClick={(e)=>{deletee(index);}}>Delete</button>
    </div>
  );

  return (
    <>
   
      <div className="mb-3">
        <input name="mytextfield2" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add item" value={inputt} onChange={(e) => setInput(e.target.value)} />
        <button type="button" className="btn btn-primary" onClick={(e) => { setListt([...listt, inputt]); setInput(''); }}>+</button>

      </div>
    
      {listtt}
    </>
  );
}
export default App;
