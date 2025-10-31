
const AddTask = ({ addNewTask }) => {
    // the e parameter represents the event object
    const handleSubmit = (e) => {
        e.preventDefault()
        // check if the input field is empty
        if (!e.currentTarget.form.task.value)
            return
        addNewTask(e.currentTarget.form.task.value)
        e.currentTarget.form.task.value = ""
    }

    return (
        <div className="w-6/8">
            <form>
                <div>
                    <label htmlFor="task" className="block mb-2 text-lg font-medium text-gray-900 dark:text-black">Task</label>
                    <input type="text" id="task" className="bg-rose-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-2 cursor-pointer dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black text-xl dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div className=" bg-blue-600 text-white w-32 p-2 text-center rounded-lg hover:bg-blue-400 hover:text-white">
                    <button className="cursor-pointer" type="submit" onClick={handleSubmit}>Add New Task</button>
                </div>
            </form>
        </div>
    )
}

export default AddTask