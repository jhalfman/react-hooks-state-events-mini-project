import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [taskList, setTaskList] = useState(TASKS)

  const handleDelete = (deletedTask) => {
    const newTaskList = taskList.filter(task => {
      return task.text !== deletedTask;
    })
    setTaskList(newTaskList);
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  }

  const onTaskFormSubmit = (newTask) => {
    setTaskList([...taskList, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleCategoryClick={handleCategoryClick} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={taskList} selectedCategory={selectedCategory} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
