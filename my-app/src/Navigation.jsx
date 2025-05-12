

function Navigation() {
    return (
        <div className="w-full flex justify-between items-center py-4 px-6 bg-violet-300 dark:bg-gray-800">
            <h1 className="text-violet-600 dark:text-gray-300">To do</h1>
            <button onClick={() => document.documentElement.classList.toggle('dark')} 
                    className="bg-violet-300 text-violet-600 border-2 border-violet-600 duration-300 h-12 px-5 rounded-2xl hover:bg-violet-600 hover:text-violet-50
                    dark:bg-gray-800 dark:text-gray-300 dark:border-gray-400">Theme</button>
        </div>
    )
}

export default Navigation