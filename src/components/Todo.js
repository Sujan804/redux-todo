import todos from "../todolist";
const Todo = (props)=>{
    return(
        <>
            <div className="flex shrink-0 flex-wrap justify-center">
                {todos.map((todo)=>(
                    <div className="m-5 rounded-md text-center w-96" key={todo.name + todo.body}>
                        <h1 className="bg-red-200 rounded-t-md">{todo.title.substring(0,50)}</h1>
                        <div className="bg-blue-200 text-left p-4">{todo.body.substring(0,300)}...</div>
                        <button className="bg-green-700 text-white w-96 h-10 rounded-b-md hover:bg-green-900">Done</button>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Todo;