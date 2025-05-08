

function Form() {
    return (
        <div className="w-1/2 flex flex-col items-center py-10">
            <input className="mb-5 w-3/4 h-10 pl-2 text-white bg-transparent border-violet-600 border-2 rounded-xl duration-500 focus:outline-none focus:bg-violet-500" />
            <button className="border-2 border-violet-600 p-2 rounded-3xl text-violet-600 duration-500 hover:text-white hover:bg-violet-600">Добавить</button>
        </div>
    )
}

export default Form