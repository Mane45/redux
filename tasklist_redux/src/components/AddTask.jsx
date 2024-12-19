import { useDispatch } from "react-redux"
import { addTask } from "../redux/actions"

export const AddTask = () => {
    const dispatch = useDispatch()
    return <div>
        <h3>Add</h3>
        <button onClick={() =>dispatch(addTask({id: Date.now(), text: "make website responsive", status: "in progress"}))}>add new task</button>
    </div>
}