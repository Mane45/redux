import { AddTask } from "./addTask"
import { Stats } from "./Stats"
import { TaskList } from "./taskList"

export const Dashboard = () => {
    return <div className="board">
        <Stats />
        <div className="row">
            <TaskList />
            <AddTask />
        </div>

    </div>
}