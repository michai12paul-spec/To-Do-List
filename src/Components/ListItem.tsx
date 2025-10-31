import { format } from "date-and-time"
import DeleteItems from "./DeleteItems"



const ListItem = ({task}) => {
    return (
        <div className="flex justify-between bg-white my-3 p-4 rounded-lg">
            <div className="flex">
                <i className="material-icons relative top-3">
                    <i className="fa-regular fa-square"></i>

                </i>
                <div className="flex flex-col ms-2">

                <span className="font-bold">
                    {task.task}
                </span>
                <span>{format(task.createdOn, 'YYYY/MM/DD')}</span>
                </div>
            </div>
            <div>
                <DeleteItems taskId={task.id} />
                
                <i className="fa-solid fa-pen relative top-3 mx-3"></i>
            </div>
        </div>
    )
}

export default ListItem