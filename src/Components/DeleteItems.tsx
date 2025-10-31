const DeleteItems = ({ taskId, delTask }) => {
    const handleDelete = () => {
        delTask(taskId);
    }

    return (
        <>
            <i className="fa-solid fa-trash relative top-3 mx-3 cursor-pointer" onClick={handleDelete}></i>{taskId}
        </>
    )
}

export default DeleteItems