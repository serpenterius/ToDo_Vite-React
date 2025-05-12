import { useRef } from "react"

function Form(props) {
    const inputRef = useRef(null);

    let addTask = () => {
        props.addTask(inputRef.current.value);
        inputRef.current.value = '';
    }

    return (
        <div className="w-full md:w-1/2 flex flex-col items-center py-10">
            <input
                ref={inputRef}
                id="task-input" 
                className="mb-5 w-3/4 h-10 pl-2 text-violet-500 bg-transparent border-violet-600 border-2 rounded-xl duration-500 focus:outline-none focus:bg-violet-500 focus:text-violet-50
                            dark:border-gray-400 dark:focus:bg-gray-300 dark:text-gray-50 dark:focus:text-gray-500" />
            <button 
                onClick={() => addTask()} 
                className="border-2 border-violet-600 py-2 px-6 rounded-3xl text-violet-600 duration-500 hover:text-white hover:bg-violet-600
                            dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-400 dark:hover:text-gray-700"
                >
                    Добавить
            </button>
        </div>
    )
}

export default Form