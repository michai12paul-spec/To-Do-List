const TaskStatus = ({ taskId, taskStatus, toggleComplete, }) => {


    const handleToggle = () => {
        toggleComplete(taskId);
    }
    return (
        <button onClick={handleToggle}>
            {taskStatus ? <i className="fa-regular fa-square-check text-xl relative "></i> : <i className="fa-regular fa-square text-xl relative "></i>}

        </button>
    )
}

export default TaskStatus