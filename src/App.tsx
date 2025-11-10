import { useEffect, useState } from "react"
import ListItem from "./Components/ListItem"
import AddTask from "./Components/AddTask"
import EditTask from "./Components/EditTask"

function App() {
  interface Task {
    id: number
    task: string
    completed: boolean
    createdOn: Date
  }

  const [tasks, setTasks] = useState<Task[]>([])
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])

  const [taskToEdit, SetTaskToEdit] = useState({
    id: 0,
    task: ""
  })

  const [filter, setFilter] = useState<number>(0);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(parseInt(e.target.value));
  }

useEffect(() => {
    filterTasks();
  }, [tasks, filter]);  

  const filterTasks = () => {
    switch (filter) {
      case 1:
        setFilteredTasks(tasks.filter((task) => task.completed === true));
        break;
      case 2:
        setFilteredTasks(tasks.filter((task) => task.completed === false));
        break;
      default:
        setFilteredTasks(tasks);
        break;
    }
  }

  const [showAddTask, setShowAddTask] = useState(false)
  const [showEditTask, setShowEditTask] = useState(false)

  const showAddTaskComponent = () => {
    setShowAddTask(!showAddTask)
  }

  const showEditTaskComponent = (state: boolean) => {
    setShowEditTask(!showEditTask)
  }

  const addNewTask = (taskDetails: string) => {
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      task: taskDetails,
      completed: false,
      createdOn: new Date()
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (taskId: number) => {
    const updTasks = tasks.filter((task) => {
      return task.id !== taskId
    })
    setTasks(updTasks)
  }

  const updateTask = (taskId: number, taskDetails: string) => {
    let updTasks = tasks.map((task) => {
      if (task.id === taskId)
        task.task = taskDetails
      return task
    })
    setTasks(updTasks)
  }


  const toggleComplete = (taskId: number) => {
    const updTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updTasks)
  }


  return (

    <div className="h-screen w-screen flex justify-center bg-stone-100">
      <div className="flex flex-col items-center m-24 w-3xl">
        <div className="text-2xl ">TO DO LIST</div>
        <div className="flex w-full justify-between">
          <div>

          </div>
          <div>
            <select onChange={handleFilterChange} name="filter" id="filterList" className="bg-slate-300 p-2 rounded-lg text-black hover:bg-slate-200 cursor-pointer">
              <option selected value="0">All</option>
              <option value="1">Done</option>
              <option value="2">Not Finished</option>
            </select>
          </div>
        </div>
        {/* end btns */}
        <AddTask addNewTask={addNewTask} showAddTask={showAddTask} showAddTastComponent={showAddTaskComponent} />
        <EditTask taskToEdit={taskToEdit} updateTask={updateTask} SetTaskToEdit={SetTaskToEdit} showEditTask={showEditTask} showEditTaskComponent={showEditTaskComponent} />
        <div className="bg-slate-300 w-full rounded-lg mt-4 px-8 py-6">

          {filteredTasks.map((task) => (
            <ListItem key={task.id} task={task} delTask={deleteTask} toggleComplete={toggleComplete} setEdit={SetTaskToEdit} />
          ))}
        </div>
        {/* end list */}
      </div>
    </div>
  )
}

export default App
