import { useState } from "react";
import todos from "../todolist";
const AddTask = (props)=>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [verdict,setVerdict] = useState(false);
    const [verdictBody, setVerdictBody] = useState('')
    const AddToList = ()=>{
        const newTask = {
            "title" : title,
            "body": body
        }
        if(newTask.title.length<5){
            setVerdictBody("Please enter a valid Title");
        }else if(newTask.body.length<=10){
            setVerdictBody("Not added ! Text is so small!")
        }else{
            todos.push(newTask);
            setVerdictBody("Task Added!")
        }
        setVerdict(true);
        setBody('');
        setTitle('');
        setTimeout(() => {
            setVerdict(false);
        }, 3000);
    }
    
    return(
        <>
            <div className="flex flex-col mx-auto text-center">
                <h1 className="font-bold  my-5">Add a new Task</h1>
                {
                  verdict &&  <h1 className="bg-yellow-100 w-96 mx-auto py-1 my-2 block transition duration-700 ease-in-out">{verdictBody}</h1>
                }  
                <div className="flex flex-col justify-evenly mx-auto">
                        <input type="text" className="w-96 h-12 border mb-5" placeholder="Title of task"
                        value={title}
                        onChange = {(e)=>{
                            setTitle(e.target.value)
                        }}
                        />
                        <textarea className="w-96 h-28  mb-5 border" placeholder="Text area"
                        value={body}
                        onChange={
                            (e)=>{
                                setBody(e.target.value)
                            }
                        }
                        ></textarea>
                        <button className="bg-green-700 hover:bg-green-900 rounded-md py-4" 
                        onClick={AddToList}
                        >Add Task</button>
                </div>
            </div>
        </>
    )
}
export default AddTask;