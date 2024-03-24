import React, { useState } from 'react'

export const AboutUs = () => {

const [tasks, setTasks] = useState(
  [{id:1,name:"Javascript course",completed:false},
  {id:2,name:"html course",completed:true},
  {id:3,name:"css course",completed:true}]);

  return (
    <div>
        <h1>Task list page</h1>
        <ul>
          {tasks.map(({id,name,completed})=>(
            <li key={id} className='w-2/5 ml-2 mr-2'><span>{id } - {name} </span>
            <button>delete</button>
            </li>
          ))}
        </ul>
    </div>
  )
}
