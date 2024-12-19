import { useDispatch } from "react-redux"
import { filterTask } from "../redux/actions"

export const Stats = () => {
    const dispatch = useDispatch()
    return <div>
        {/* <p>completed</p>
        <p>in progress</p>
        <p>unstarted</p> */}
        <h3>filter status</h3>
        <select onChange={event => {dispatch(filterTask(event.target.value))}}>
            <option>all</option>
            <option>completed</option>
            <option>in progress</option>
            <option>unstarted</option>
        </select>
    </div>
}