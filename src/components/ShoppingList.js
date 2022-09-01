import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterName, setFilterName] = useState("");

  const onSearchChange = (event) => {
    setFilterName(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && filterName.length === 0) {
      return true;
    }
    if(filterName.length > 0){
      const itemName = item.name.toLowerCase()
      return itemName.includes(filterName.toLowerCase())
    }
    if(selectedCategory != "All" && filterName.length === 0) {
      return item.category === selectedCategory;
    }
  });


 

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={onSearchChange} search={filterName} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
