import React, { useContext, useEffect, useState } from "react";
import { applicationContext } from "../context/ApplicationContext";
import TaskItem from "./components/TaskItem";
import axios from 'axios';
function ListTask() {
  const ctx = useContext(applicationContext);
  const [taskData, setTaskData] = useState([]);
  const [changeData, setChangeData] = useState(false)
  useEffect(() => {
    ctx.todo.getAll().then((data) => {
      setTaskData(data.data);
    });
  },[changeData]);
  
  function changeDataHandler(){
    setChangeData(!changeData);
  }
  return (
    <div>
      {
        taskData.map((task,taskOrderNumber)=>{
          return (
            <ul className="taskItems list-group" key={taskOrderNumber}>
            <TaskItem data={task} changeHandler={changeDataHandler} />
            </ul>)
        })
      }
    </div>
  )
}

export default ListTask;
