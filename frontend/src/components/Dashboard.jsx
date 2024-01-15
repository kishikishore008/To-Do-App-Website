
import React, { useState, useMemo, useEffect } from 'react';
import axios from 'axios';


export function Dashboard(){


const [todos,setTodos]=useState([])
const [column,setColumn]=useState([])
const [record,setRecord]=useState([])



useEffect( ()=> {
      
         axios.get("http://localhost:3000/todos")
         .then((res)=>{
            console.log(res)
           setTodos(res.data.todos)
         })
        
   ;
},[])




    // return(<div>
    //     <table>
    //         <thead>
    //             <tr> 
    //                 {column.map((c,i)=>(
    //                     <th key={i}>{c}</th>
    //                 ))}
    //             </tr>
    //         </thead>
    //     </table>
    // </div>

 return(
        <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.title}   {todo.description}</li>
        ))}
      </ul>
      </div>  
    )
}




 