import { useDispatch, useSelector } from "react-redux"
import { updateTask } from "../redux/actions"



export const TaskList = () => {
    const dispatch = useDispatch()
    //const list = useSelector(state => state.filteredTasks > 0 ? state.filteredTasks : state.tasks)
    const list = useSelector(state => state.filteredTasks)
    //console.log(list)
    return <div className="list">
        { 
            list.map(task =>
                <div key={task.id}>
                    <p>{task.text}</p>
                    <p>{task.status}</p>
                    {task.status == "in progress"
                        ? <img src="https://cdn0.iconfinder.com/data/icons/job-seeker/256/laptop_job_seeker_employee_unemployee_work_1-512.png" alt="" />
                        : task.status == "completed"
                            ? <img src="https://cdn4.iconfinder.com/data/icons/shopping-e-commerce-6-2/32/Shopping-List-Completed-Check_mark-512.png" alt="" />
                            : <img src="https://cdn3.iconfinder.com/data/icons/folders-files/512/empty_folder-512.png" alt="" />
                    }
                    <select value={task.status} onChange={(event) => dispatch(updateTask(task.id, event.target.value))}>
                        <option>in progress</option>
                        <option>unstarted</option>
                        <option>completed</option>
                    </select>
                </div>
            )
        }
        
    </div>
}