import CompletedTodoView from './CompletedTodoView'
const CompletedTodo = (props)=>{
    const {CompletedTodoList, onArchiveTodo} = props;
    return(
        <>
            <div className="flex shrink-0 flex-wrap justify-center">
                {CompletedTodoList.map((todo)=>(
                    <CompletedTodoView todo = {todo} onArchiveTodo = {onArchiveTodo}  key= {todo.id}/>
                ))}
            </div>
        </>
    )
}
export default CompletedTodo;