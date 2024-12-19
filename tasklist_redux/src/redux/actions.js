export const updateTask = (id, status) => {
    return {
        type: "task/update",
        payload: { id, status }
    }
}

export const addTask = (task) => {
    return {
        type: "task/add",
        payload: task
    }
}
export const filterTask = (status) => {
    console.log(status)
    return {
        type: "task/filter",
        payload: status
    }
}