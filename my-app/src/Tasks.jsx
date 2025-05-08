


function Tasks(props) {
    let {tasks, filter} = props;
    let filteredTasks;

    if(filter === 'all') {
        filteredTasks = tasks.filter(item => item);
    } else if (filter === 'active') {
        filteredTasks = tasks.filter(item => item.completed === false);
    } else if (filter === 'completed') {
        filteredTasks = tasks.filter(item => item.completed === true);
    }
    

    return(
        <ul className="w-1/2 p-10 flex flex-col items-start">
            {filteredTasks.map(item => (
                <li key={item.id} className="w-full py-2 flex justify-between text-violet-600">
                    {item.text}
                    <button>Выполнить</button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks