import React,{useState} from 'react'
import Header from './Header.js'
import ListContainer from './ListContainer.js'

function TodoContainer() {
    const [inputt, setInput] = useState('');
    const [listt, setListt] = useState([]);
    return (
    <>
     <Header inputt={inputt} listt={listt} setListt={setListt} setInput={setInput}/>
     <ListContainer listt={listt}/>
     </>
    )
}
export default TodoContainer
