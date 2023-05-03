//##FILTER  DELIVERABLE
//2a. create a Filter component by refactoring the <select> element out of the ShoppingList component (see it commented out in ShoppingList
import React from 'react'


function Filter({onCategoryChange}) {
  return (
    <div>
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
    </div>
  )
}

export default Filter