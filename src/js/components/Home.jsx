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
	const deleteTask =(index) =>{
		setTasks(tasks.filter((item, i) => index != i))
	}
	const Tarea = (  {descripcion, onDelete}) =>{
    	const [isHover, setIsHover] = useState(false)
    	return (
                <p onMouseEnter={() => setIsHover(true)  } onMouseLeave={() => setIsHover(false)} >{descripcion}
                {isHover && <button className="btn btn-danger text-white" onClick={onDelete}  > X </button>}
                </p>
            	)
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
					return (<Tarea key={index} descripcion={tarea} onDelete={() => deleteTask(index)} />)
					})
				}
			</div>
		</div>
	);
};

export default Home;