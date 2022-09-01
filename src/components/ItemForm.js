import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [ formData, setFormData ] = useState({
    name: "",
    category: "Produce"
  });

    
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ 
      ...formData,
      id: uuid(),
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(formData)
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} value={formData.name}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleChange} value={formData.category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" >Add to List</button>
    </form>
  );
}

export default ItemForm;
