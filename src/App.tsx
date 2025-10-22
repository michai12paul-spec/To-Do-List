import { useState } from "react"
import ListItem from "./ListItem"

function App() {
const[tasks, setTasks] = useState([{
  id: 1,
  task: "Sample Task",
  completed: false,
  createdOn: new Date()
}])

  return (
    
    <div className="h-screen w-screen flex justify-center bg-stone-100">
      <div className="flex flex-col items-center m-24 w-3xl">
        <div className="text-2xl">TODO LIST</div>
        <div className="flex w-full justify-between">
          <div>
            <button className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-400 cursor-pointer">Add Task</button>
          </div>
          <div>
            <select name="filter" id="filterList" className="bg-slate-300 p-2 rounded-lg text-black hover:bg-slate-200 cursor-pointer">
              <option selected value="all">All</option>
              <option value="done">Done</option>
              <option value="unfinished">Not Finished</option>
            </select>
          </div>
        </div>
        {/* end btns */}
        <div className="bg-slate-300 w-full rounded-lg mt-4 px-8 py-6">
          {tasks.map((task) => (
          <ListItem key={task.id} task={task}/> 
          ))}
        </div>
        {/* end list */}
      </div>
    </div>
  )
}

export default App
