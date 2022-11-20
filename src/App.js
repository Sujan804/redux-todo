import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Homepage from './components/Homepage';
import AddTask from './components/AddTask';
import Todo from './components/Todo';
import CompletedTodo from './components/CompletedTodo';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([]);
  const fetchData = useCallback(()=>{
      fetch('./data.json')
      .then(response => response.json())
      .then((data)=>{
        setTaskList(data);
      })
  },[])
  useEffect(()=>{
    fetchData();
  },[fetchData])
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
        <Route path="/" element={<Homepage taskList = {taskList}/>} />
        <Route path='/add-task' element={<AddTask 
        onSendTask = {(newTask)=>
          setTaskList([...taskList,newTask])
        }
        lastId = {taskList.reduce((max,task)=> Number(task.id)>max? Number(task.id): max,0)}
        />}/>
        <Route path='/to-do' element = {<Todo 
        todoList = {taskList}
        onDeleteTask = {
          (taskId)=>{
            setTaskList(taskList.map(
              (task)=>{
                if(task.id === taskId){
                  task.completed = true;
                }
                return task;
              }
              )
            )
          }
        }
        />}/>
        <Route path='/completed' element = {<CompletedTodo 
        CompletedTodoList = {taskList}
        onArchiveTodo = {taskId =>
          setTaskList(taskList.filter(task =>
            task.id !== taskId))
          }
        />}/>
        {/* <Route path='*' element = {<NotFoundPage/>}/> */}
     </Routes>
   </BrowserRouter>
  );
}
export default App;
