import React from "react";

import { useState } from "react";



const Home = () => {

	const [tasks, setTasks] = useState([
		"1",
		"2",
		"3",
		"4"
	])

	const [createTask, setCreateTask] = useState();
	
	let addTask =(key) => {
		if (key === "Enter"){
			setTasks([...tasks, createTask.trim()])
		}
	}

	    let deleteTask = (index) =>{
        setTasks(tasks.filter((item, i)=> index != i ))
    }



	return (
		<div className="card text-center mt-5">
            <div className="card-body">
				<div>
					<h1 className="card-title">toDoList</h1>
					<input onChange={event => setCreateTask(event.target.value)} type="text" value={createTask || " "}
					onKeyUp={event =>addTask(event.key)}
					/>
				</div>
				
				{tasks.map((tarea, index) => {
					return <p key={index}> {tarea} </p>
					})
				}
			</div>
		</div>
	);
};

export default Home;