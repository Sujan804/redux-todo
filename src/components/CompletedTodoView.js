
const CompletedTodoView = (props)=>{
    const   {todo,onArchiveTodo} = props;
    if(todo.completed)
    return( 
        <div className="m-5 rounded-md text-center w-96" key={todo.id}>
            <h1 className="bg-red-200 rounded-t-md">{todo.title.substring(0,50)}</h1>
            <div className="bg-blue-200 text-left p-4">{todo.body.substring(0,300)}...</div>
            <button className="bg-red-700 text-white w-96 h-10 rounded-b-md hover:bg-red-900"
            onClick={()=>{
                onArchiveTodo(todo.id)
            }}
            >Archive</button>
        </div>
    )
}
export default CompletedTodoView;