import { useRef, useEffect } from "react";

function Filters(props) {
    let activeFilter = 'w-32 md:w-32 py-1 px-1 border-2 border-violet-600 rounded-2xl text-violet-600 dark:border-gray-400 dark:text-gray-400';
    let defaultFilter = 'w-32 md:w-32 py-1 px-1 text-violet-600 border-2 border-transparent rounded-2xl duration-500 hover:border-violet-600 hover:text-violet-100 hover:bg-violet-600 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-gray-600';

    let {filter, changeFilter} = props

    const active = useRef(null);
    const all = useRef(null);
    const completed = useRef(null);

    useEffect(() => {
        all.current.className = defaultFilter;
        active.current.className = defaultFilter;
        completed.current.className = defaultFilter;

        if(filter === 'all') {
            all.current.className = activeFilter;
        } else if (filter === 'active') {
            active.current.className = activeFilter;
        } else if (filter === 'completed') {
            completed.current.className = activeFilter;
        }
    }, [filter])



    return(
        <div className="w-full md:w-1/2 flex justify-around">
            <button onClick={() => changeFilter('all')} 
                    ref={all}>Все</button>
            <button onClick={() => changeFilter('active')} 
                    ref={active}>Активные</button>
            <button onClick={() => changeFilter('completed')} 
                    ref={completed}>Завершенные</button>
        </div>
    )
}

export default Filters