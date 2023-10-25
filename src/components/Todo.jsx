import React from 'react'
import { remove } from './Slice'
import {useDispatch,useSelector} from 'react-redux'
import '../styles/leap.css'

const Todo = () => {
    const dispatch = useDispatch();


    const todos = useSelector(state=>state.todos)
  return (

        <div className='container-2'>
      {todos.map((todo)=>(
        <div className='form-4' key={todo}>
            {todo.text}
           <div >
           <button className='form-5' onClick={()=>dispatch(remove(todo.id))}>remove</button>
           </div>
        </div>

      ))}
      </div>
   
  )
}

export default Todo
