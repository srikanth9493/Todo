import React from 'react'
import './list.css'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';
import { forwardRef } from 'react';
const  List=forwardRef(({children,id,del,edit},ref)=> {

    return (
        <div className="cont" ref={ref}>
            <div className="text">{children}</div> <div><EditIcon onClick={(e)=>edit(id)}>edit</EditIcon> <DeleteIcon onClick={(e)=>del(id)}> del</DeleteIcon></div>
        </div>
    )
})

export default List
