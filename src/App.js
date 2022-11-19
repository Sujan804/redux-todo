import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Homepage from './components/Homepage';
import AddTask from './components/AddTask';
import Todo from './components/Todo';
import CompletedTodo from './components/CompletedTodo';
function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='/add-task' element={<AddTask/>}/>
        <Route path='/to-do' element = {<Todo/>}/>
        <Route path='/completed' element = {<CompletedTodo/>}/>
        {/* <Route path='*' element = {<NotFoundPage/>}/> */}
     </Routes>
   </BrowserRouter>
  );
}
export default App;
