import React,{useState,useRef} from "react";
import "./Notes.css"

function Notes(){
    const [value,setValue] = useState('')
    const [nullvalue,setNullvalue] = useState('')
    const inputRef = useRef('');

    function getValue(){
        setValue(inputRef.current.value)
        setNullvalue('')
    }
    return(
        <>
         <input className="input" 
         type="text"          
         name="name" 
         ref={inputRef}
         value={nullvalue}/>
            <button onClick={getValue}>on</button>
                 <span>{value}</span>
        </>
    )
}
export default Notes