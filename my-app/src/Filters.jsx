
function Filters() {
    return(
        <div className="w-1/2 flex justify-around">
            <button className="w-1/4 py-1 text-violet-600 border-2 border-transparent rounded-2xl duration-500 hover:border-violet-600 hover:text-violet-100">Все</button>
            <button className="w-1/4 py-1 text-violet-600 border-2 border-transparent rounded-2xl duration-500 hover:border-violet-600 hover:text-violet-100">Активные</button>
            <button className="w-1/4 py-1 text-violet-600 border-2 border-transparent rounded-2xl duration-500 hover:border-violet-600 hover:text-violet-100">Завершенные</button>
        </div>
    )
}

export default Filters