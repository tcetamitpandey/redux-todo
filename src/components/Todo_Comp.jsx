import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addTodo,removeTodo } from '../slices/todoSlice';

const Todo_Comp = () => {

  const dispath=useDispatch()

  const todo_data = useSelector((state) => state.todo.value);

  const [newTodo, setNewTodo] = useState("")

  return (
    <div>
      <div>
        {todo_data.map((item,index) => (
          <div key={index}>
            <h1>{item.title}</h1>
            
            <button onClick={()=> dispath(removeTodo(index))}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <input onChange={(e)=>{setNewTodo(e.target.value)}} type="text" />

        <button onClick={()=>dispath(addTodo({title: newTodo}))}>Add Todo</button>
      </div>
    </div>
  );
};

export default Todo_Comp;
