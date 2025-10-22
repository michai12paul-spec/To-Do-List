
const AddTask = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        addNewTask(e.target.task.value)
    }
  return (
    <div>
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-slate-400 dark:text-black">Task</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-300 dark:border-gray-600 dark:placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Task Name" required />
        </div>
    </div>
  )
}

export default AddTask