import React, {useState} from "react";
import Clock from "./clock";
import ColorPicker from "./ColorPicker.jsx";

function TodoList(){
    const [tasks, setTasks] = useState(["Wash bike"])
    const [newTask, setNewTask] = useState("")

    function handleTaskChange(e){
        setNewTask(e.target.value)
    }

    function addTask(){
        setTasks(t => [...t, newTask])
        setNewTask("")
    }

    function deleteTask(index){
       const updatedTasks =  tasks.filter((_, i) =>  i!==index)
       setTasks(updatedTasks)
    }
    return(
        <div className="container">
            <div className="task-container">
                <h1>Todo-List</h1>
                <input type="text" placeholder="Enter a task" onChange={(e)=> handleTaskChange(e)} value={newTask}/>
                <button className="add-task-button" onClick={addTask} >Add task</button>
                <ol>
                {tasks.map((task, index)=> 
                    <span className="li-span">
                        <li key={index}>{task} <button className="delete-task-button" onClick={()=> deleteTask(index)}>Delete</button></li>
                    </span>
                    
                    )}
                </ol>
            </div>
            <br /><br /><br />
            <div className="clock-container">
                <h1>Digital clock</h1>
                <Clock />
            </div>
            <br /><br /><br />
            <div className="color-picker-container">
                <ColorPicker />
            </div>
        </div>
    )
}

export default TodoList;