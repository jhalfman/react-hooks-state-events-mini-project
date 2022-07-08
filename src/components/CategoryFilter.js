import React from "react";

function CategoryFilter({categories, handleCategoryClick, selectedCategory}) {

  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => {
        if (selectedCategory === category) {
          return <button className="selected" key={category} onClick={() => handleCategoryClick(category)}>{category}</button>
        }
        else {
          return <button key={category} onClick={() => handleCategoryClick(category)}>{category}</button>
        }        
      })}
    </div>
  );
}

export default CategoryFilter;
