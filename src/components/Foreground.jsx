import React,{useState, useRef,useContext} from 'react'
import Card from './Card'
import { MyContext } from './Context'

function Foreground (){
    const { allTodos, addTodo, updateTodo, deleteTodo } = useContext(MyContext)

    const add = (e) => {
        e.preventDefault()
        if (allTodos.length < 12) addTodo()
    }
    const ref = useRef(null);
    
  return (
    <div className="relative w-full h-screen z-[3]">
    {/* Add Docs Button */}
    <div
  onClick={add}
  className='fixed bottom-10 right-10  bg-green-500 text-xl text-white border-2 borderwhite rounded-3xl px-5 py-3 cursor-pointer'
>
  {allTodos.length < 12 ? 'Add Notes' : 'Limit Reached'}
</div>


    {/* Todos Display Section */}
    <div ref={ref} className="w-full h-screen flex gap-0 flex-wrap p-2">
      {allTodos.map(todo => (
        <Card key={todo.id} todo={todo} reference={ref} />
      ))}
    </div>
  </div>
  )
}

export default Foreground// npx tailwindcss -i ./src/index.css -o ./src/output.css --watch