


function Tasks(props) {
    let {tasks, filter} = props;
    let filteredTasks,
        listOfTasks;

    if(filter === 'all') {
        filteredTasks = tasks.filter(item => item);
    } else if (filter === 'active') {
        filteredTasks = tasks.filter(item => item.completed === false);
    } else if (filter === 'completed') {
        filteredTasks = tasks.filter(item => item.completed === true);
    }

    listOfTasks = filteredTasks.map(task => (
        task.completed ? (
            <li key={task.id} className="w-full py-2 flex justify-between text-violet-400">
                {task.text}
                <button onClick={() => props.deleteTask(task)}>Удалить</button>
            </li>
        ) : (
            <li key={task.id} className="w-full py-2 flex justify-between text-violet-600">
                {task.text}
                <button onClick={() => props.completeTask(task)}>Выполнить</button>
            </li>
        )

    ))

    

    return(
        <ul className="w-full md:w-1/2 p-10 flex flex-col items-start">
            {/* {filteredTasks.map(item => (
                <li key={item.id} className="w-full py-2 flex justify-between text-violet-600">
                    {item.text}
                    <button onClick={() => props.completeTask(item)}>Выполнить</button>
                </li>
            ))} */}

            {listOfTasks}
        </ul>
    )
}

export default Tasks