import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete, selectedCategory}) {



  return (
    <div className="tasks">
      {/* {tasks.map(task => {
        return <Task text={task.text} category={task.category} key={task.text} handleDelete={handleDelete}/>
      })} */}
      {tasks.map(task => {
        if (selectedCategory === task.category || selectedCategory === "All" || selectedCategory === undefined){
          return <Task text={task.text} category={task.category} key={task.text} handleDelete={handleDelete}/>
        }
        else {
          return null;
        }
      })}
    </div>
  );
}

export default TaskList;
