

const EditTask = ({ taskToEdit, updateTask, SetTaskToEdit }) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        updateTask(taskToEdit.id, taskToEdit.task)
    }
    const handleChange = (e) => {
        SetTaskToEdit({
            ...taskToEdit,
            task: e.target.value
        })
    }
    return (
        <form>
            <div>
                <label htmlFor="task" className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">Task</label>
                <input type="text" id="task" value={taskToEdit.task} onChange={handleChange} className="bg-rose-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 cursor-pointer dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black text-xl dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
            <div className=" bg-indigo-600 text-white w-32 p-2 text-center rounded-lg hover:bg-indigo-400 hover:text-white">
                <button className="cursor-pointer" type="submit" onClick={handleSubmit}>Save Changes</button>
            </div>
        </form>
    )
}

export default EditTask