import React, { useEffect, useState } from 'react'

const localStorageComp = ()=>{

    const [tasks, setTasks] = useState("")

    const [taskList, setTaskList] = useState([]);

    const changeHandler = (e)=>{
        console.log(e.target.value)
        if (e.target.value !== "") {
            setTasks(e.target.value)
        }
    }

    const saveTasks =()=>{
        if (tasks !== "") {
            
            setTaskList([...taskList, tasks])
            setTasks("")
            localStorage.setItem("tasks", JSON.stringify(taskList))
        }
    }

    useEffect(()=>{
        const retrievedTasks =  JSON.parse(localStorage.getItem("tasks"))
        if(retrievedTasks && retrievedTasks.length >0) {
            console.log("retrievedTasks", retrievedTasks)
            setTaskList(retrievedTasks)
            console.log("localStorage",localStorage)
        }
    }, [])

    return(<div>
        <form>
            Name: 
            <input type="text" value={tasks} onChange={(e)=>changeHandler(e)} name='tasks'></input>
            <button type='button' onClick={()=>saveTasks()}>Submit</button>
        </form>
        <hr/>
        Names : <br/>
        {taskList.map(res=>res)} 

    </div>)

}

export default localStorageComp;