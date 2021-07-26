import React from 'react'


function Header({inputt,listt,setListt,setInput}) {
  
    return (
        <div class="mb-3">
        
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add item" value={inputt} onChange={(e)=>setInput(e.target.value)}/>
        <button type="button" className="btn btn-primary" onClick={(e)=>setListt([...listt,inputt])}>+</button>
        <h1>{inputt}</h1>
      </div>
    )
}
export default Header;