

const EditItem = ({ taskId, taskDetails, setEdit }) => {

    const handleEdit = () => {
        setEdit({
            id: taskId,
            task: taskDetails
        });
    }
    return (
        <>
            <i onClick={handleEdit} className="fa-solid fa-pen relative top-3 mx-3"></i>
        </>
    )
}

export default EditItem