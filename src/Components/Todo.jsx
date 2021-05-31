import React from 'react'
import { useState } from 'react'
import List from './List'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import './Todo.css'
import FlipMove from 'react-flip-move';
import { v4 as uuidv4 } from 'uuid';

function Todo() {
    const [text, settext] = useState("")
   const [list, setlist] = useState([])
    const handleText=(e)=>{
        settext(e.target.value)
    }
    const handleClick=(e,id)=>{
        if(id){
         list[id]=text;
         setlist(list)
        }
        setlist([...list,{txt:text,id:uuidv4()}])
        settext("")
    }
    const handleEdit=(id,e)=>{
        console.log(e,id)
        settext(list[id])
        
        // handleClick("",id)
    }

    const handleDel=(lid)=>{
        let del_id=list.findIndex(({txt,id})=>id==lid)
        console.log(del_id)
        list.splice(del_id,1)
        setlist([...list])

        //  setlist(list.filter(({txt,id})=>id!=lid))
    }
    return (
        <div className="todo">
           <div className="todo_form">
                <input type="text" onChange={handleText} value={text}/>
                <button style={{backgroundColor:"transparent",border:"none"}} onClick={handleClick}>
                    <AddCircleIcon></AddCircleIcon>
                </button>
           </div>
           <div className="todo_list">
               <FlipMove>
                {

                    list?.map(({txt,id})=>(<List   id={id.toString()} edit={handleEdit} del={handleDel}>
                            {txt}
                    </List>))
                }   
                </FlipMove>
           </div>
        </div>
    )
}

export default Todo
