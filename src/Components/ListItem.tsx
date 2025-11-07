import { format } from "date-and-time"
import DeleteItems from "./DeleteItems"
import TaskStatus from "./TaskStatus"
import EditItem from "./EditItem"




const ListItem = ({ task, delTask, toggleComplete, setEdit }) => {

    return (
        <div className="flex justify-between bg-white my-3 p-4 rounded-lg">
            <div className="flex">
                <i className="material-icons relative top-3">
                    <TaskStatus taskId={task.id}
                        taskStatus={task.completed}
                        toggleComplete={toggleComplete} />

                </i>
                <div className="flex flex-col ms-2">

                    <span className="font-bold">
                        {task.task}
                    </span>
                    <span>{format(task.createdOn, 'YYYY/MM/DD')}</span>
                </div>
            </div>
            <div>
                <DeleteItems taskId={task.id} delTask={delTask} />

                <EditItem taskId={task.id} taskDetails={task.task} setEdit= {setEdit} />
            </div>
        </div>
    )
}

export default ListItem