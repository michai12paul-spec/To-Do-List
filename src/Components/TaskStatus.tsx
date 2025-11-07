const TaskStatus = ({ taskId, taskStatus, toggleComplete, }) => {


    const handleToggle = () => {
        toggleComplete(taskId);
    }
    return (
        <button onClick={handleToggle}>
            {taskStatus ? <i className="fa-regular fa-square-check text-xl relative cursor-pointer"></i> : <i className="fa-regular fa-square text-xl relative cursor-pointer"></i>}

        </button>
    )
}

export default TaskStatus