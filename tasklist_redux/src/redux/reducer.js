import initialState from "./state"

export const reducer = (state = initialState, action) => {
    state.filteredTasks = [...state.tasks]
    switch (action.type) {
        case 'task/update':
            return {
                ...state,
                filteredTasks: [...state.tasks].map(task => task.id == action.payload.id ? { ...task, status: action.payload.status } : task)
            }
        case 'task/add':
            return {
                ...state,
                tasks: [...state.filteredTasks, action.payload]
            }
        case 'task/filter':
            return {
                ...state,
                filteredTasks: action.payload == "all" ? [...state.tasks]:[...state.tasks].filter(task => task.status == action.payload)
            }
        default:
            return state
    }
}