import { Link } from "react-router-dom";
const  Navbar = ()=>{
    return (
        <>
            <nav className="flex items-center  font-semibold justify-between px-8 py-4 bg-slate-600 text-white" >
                <div>
                    <img className="h-12 w-12" src="logo.png" alt="logo"/>
                </div>
                <ul className="flex justify-between">
                    <li className="mx-6">
                        <Link to="/add-task">Add Task</Link>
                    </li>
                    <li className="mx-6">
                        <Link to="/to-do">To do</Link>
                    </li>
                    <li className="mx-6">
                       <Link to="completed">Completed</Link>
                    </li>
                </ul>
                <div>
                    <button>Login</button>
                </div>
            </nav>
        </>
    )
}
export default Navbar;