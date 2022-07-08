import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [newTaskForm, setNewTaskForm] = useState({
    "text": "",
    "category": "Code",
  })

  const handleFormChange = (e) => {
    setNewTaskForm({
      ...newTaskForm,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <form className="new-task-form" onSubmit={(e) => {e.preventDefault(); onTaskFormSubmit(newTaskForm)}}>
      <label>
        Details
        <input type="text" name="text" onChange={handleFormChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleFormChange}>
          {categories.map(category => {
            if (category !== "All") {
              return <option key={category}>{category}</option>
            }
            else return null
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
